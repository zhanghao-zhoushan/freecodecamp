// Slasher Flick

// 截断数组

// 返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。

function slasher1(arr, howMany) {

  return arr.slice(howMany);

}

// use splice
// splice() 方法会直接对数组进行修改。
function slasher(arr, howMany) {

  return arr.splice(howMany);

}

var result = slasher([1, 2, 3], 2);
console.log(result)

