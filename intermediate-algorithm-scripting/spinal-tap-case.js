// Spinal Tap Case 
// 将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。

// 如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

// 这是一些对你有帮助的资源:

// RegExp
// String.replace()

function spinalCase(str) {
  return str.replace(/\s|_/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

var result = spinalCase('This Is Spinal Tap');

console.log(result)