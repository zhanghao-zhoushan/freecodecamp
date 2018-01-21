// Boo who 
// 检查一个值是否是基本布尔类型，并返回 true 或 false。

// 基本布尔类型即 true 和 false。

// 如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

// 这是一些对你有帮助的资源:

// Boolean Objects

function boo(bool) {
  return Object.prototype.toString.call(bool) === '[object Boolean]'
}

console.log(boo(true));

