// Sum All Primes

// 求小于等于给定数值的质数之和。

// 只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。

// 给定的数不一定是质数。

// 如果你被卡住了，记得开大招 Read - Search - Ask。尝试与他人结伴编程、编写你自己的代码。

// 这是一些对你有帮助的资源:

// For Loops
// Array.push()

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function sumPrimes(num) {
  if (num < 2) return 0;
  var arr = [2];
  for (var i = 3; i <= num; i += 2) {
    if (isPrime(i)) arr.push(i);
  }
  return arr.reduce(function (a, b) {
    return a + b;
  });
}




var result = sumPrimes(977);

console.log(result);