// Sum All Numbers in a Range

// 我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。

// 最小的数字并非总在最前面。

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var len = Math.abs(arr[0] - arr[1]) + 1;
  var array = [];

  for (var i = 0; i < len; i++) {
    array.push(min + i);
  }
  return array.reduce(function (a, b) {
    return a + b;
  });

}

function sumAll1(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var sun = 0;

  for (var i = min; i <= max; i++) {
    sun += i;
  }

  return sun;

}

function sumAll2(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var sun = 0;

  for (var i = min; i <= max; i++) {
    sun += i;
  }

  return sun;

}

function sumAll(arr) {
  return (arr[0] + arr[1]) * (Math.abs(arr[0] - arr[1]) + 1) / 2;
}

var result = sumAll([1, 4]);

console.log(result);