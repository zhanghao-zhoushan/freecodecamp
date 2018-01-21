// Missing letters 
// 从传递进来的字母序列中找到缺失的字母并返回它。

// 如果所有字母都在序列中，返回 undefined。

// 如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

// 这是一些对你有帮助的资源:

// String.charCodeAt()
// String.fromCharCode()

function fearNotLetter(str) {
  for (var i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {
      return String.fromCharCode(str.charCodeAt(i + 1) - 1);
    }
  }
}

var res = fearNotLetter("abce");

console.log(res)
