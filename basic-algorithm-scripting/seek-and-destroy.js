// Seek and Destroy

// 摧毁数组

// 金克斯的迫击炮！

// 实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。

// 通过将arguments转为数组

// maybe use 
// var args = Array.prototype.slice.call(arguments, 1);
// var args = [].slice.call(arguments, 1);

function destroyer(arr) {

  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return arr.filter(function (item) {
    return args.indexOf(item) < 0;
  });

}

var result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result);
