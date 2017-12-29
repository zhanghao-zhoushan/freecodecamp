// Check for Palindromes

// 检查回文字符串

// 如果给定的字符串是回文，返回true，反之，返回false。

// 如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

// 注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。

// 函数参数的值可以为"racecar"，"RaceCar"和"race CAR"。

function palindrome(str) {

  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g, '');

  var len = str.length;
  for (var i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;

}

console.log(palindrome("My age is 0, 0 si ega ym."));