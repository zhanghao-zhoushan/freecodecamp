// Pig Latin

// 把指定的字符串翻译成 pig latin。

// Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。

// 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。

// 如果你被难住了，记得使用 Read-Search-Ask尝试与他人结伴编程、编写你自己的代码。

// 这是一些对你有帮助的资源:

// Array.indexOf()
// Array.push()
// Array.join()
// String.substr()
// String.split()

function translate(str) {
  str = str.split('');
  var reg = /[aeiou]/;
  if (reg.test(str[0])) {
    return str.join('') + 'way';
  }

  for (var i = 0; i < str.length; i++) {
    if (!reg.test(str[0])) {
      str.push(str.splice(0, 1));
    } else {
      return str.join('') + 'ay';
    }
  }
}

var result = translate("glove");

console.log(result);
