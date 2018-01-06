// Caesars Cipher

// 凯撒密码

// （让上帝的归上帝，凯撒的归凯撒）

// 下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。

// 移位密码也就是密码中的字母会按照指定的数量来做移位。

// 一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。

// 写一个ROT13函数，实现输入加密字符串，输出解密字符串。

// 所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。

function rot13(str) {

  str = str.toUpperCase();

  return str.split('').map(getCaesars).join('');

  function getCaesars(letter) {
    var code = letter.charCodeAt(0)
    if (code >= 65 && code <= 90) {
      code = code + 13;
      if (code > 90) {
        code = 64 + (code - 90);
      }
      return String.fromCharCode(code)
    } else {
      return letter;
    }

  }
}


function rot13(str) {

  str = str.toUpperCase();

  return str.split('').map(getCaesars).join('');

  function getCaesars(letter) {
    if (/[A-Z]/.test(letter)) {
      var code = letter.charCodeAt(0) + 13;
      return String.fromCharCode(code > 90 ? 64 + (code - 90) : code);
    } else {
      return letter;
    }

  }
}

var result = rot13("SERR PBQR PNZC");

// rot13("SERR PBQR PNZC") 应该解码为 "FREE CODE CAMP"

console.log(result)