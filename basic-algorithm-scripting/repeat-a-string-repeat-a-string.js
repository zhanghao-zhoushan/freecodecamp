// Repeat a string repeat a string

// 重复输出字符串

// （重要的事情说3遍）

// 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。

function repeat(str, num) {

  if (num <= 0) return '';
  var result = '';
  for (var i = 0; i < num; i++) {
    result += str;
  }
  return result;

}

var result = repeat("abc", 3);
console.log(result);
