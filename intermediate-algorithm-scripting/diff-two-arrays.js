// Diff Two Arrays

// 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。

// 如果你被难住了，记得使用 Read-Search-Ask尝试与他人结伴编程、编写你自己的代码。

// 这是一些对你有帮助的资源:

// Comparison Operators
// Array.slice()
// Array.filter()
// Array.indexOf()
// Array.concat()

function diff(arr1, arr2) {

  return arr1.filter(function (item) {
    return arr2.indexOf(item) < 0
  }).concat(arr2.filter(function (item) {
    return arr1.indexOf(item) < 0
  }))
}

function diff1(arr1, arr2) {

  var arr3 = arr1.concat(arr2);

  return arr3.filter(function (item) {
    return arr1.indexOf(item) === - 1 || arr2.indexOf(item) === - 1;
  });

}

var result = diff1([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result)
