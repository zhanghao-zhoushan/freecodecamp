// Exact Change
// 设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 , 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数.
// cid 是一个二维数组，存着当前可用的找零.
// 当收银机中的钱不够找零时返回字符串 "Insufficient Funds". 如果正好则返回字符串 "Closed".
// 否则, 返回应找回的零钱列表,且由大到小存在二维数组中.

function checkCashRegister(price, cash, cid) {
  var diff = cash - price;
  var sum = 0;

  for (var i = 0; i < cid.length - 1; i++) {
    if (cid[i][1] === diff) return 'Closed'
    sum += cid[i][1];
  }

  if (sum < diff) return 'Insufficient Funds';

  cid.sort(function (a, b) {
    return a[1] < b[1];
  })

  return cid.filter(function (item) {
    return item[1] <= diff;
  });
}
