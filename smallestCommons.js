// 两个或多个整数公有的倍数叫做它们的公倍数，其中除0以外最小的一个公倍数就叫做这几个整数的最小公倍数。
// 思路 全部相乘 除以 最小公倍数
function smallestCommons(arr) {
  arr.sort(function (a, b) {
    a - b
  })
  var localArr = []
  for (let i = arr[0]; i <= arr[1]; i++) {
    localArr.push(i)
  }
  return localArr.reduce(function (a, b) {
    return a * b / gcd(a, b)
  })
}

function gcd(a, b) {
  if (a % b === 0) {
    return b
  } else {
    return gcd(b, a % b)
  }
}
console.log(smallestCommons([1, 13]))
