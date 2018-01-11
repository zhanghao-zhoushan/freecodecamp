// Roman Numeral Converter

// 将给定的数字转换成罗马数字。

// 所有返回的 罗马数字 都应该是大写形式。

// 如果你被难住了，记得使用 Read-Search-Ask尝试与他人结伴编程、编写你自己的代码。

// 这是一些对你有帮助的资源:

// Roman Numerals
// Array.splice()
// Array.indexOf()
// Array.join()

// Note
// Object.keys() 和 for...in 输出顺序一样
// Object.keys(obj)
// 按（integer indices）升序输出
// 按添加顺序输出字符串key
// 按添加顺序输出Symbol key （es6 中新加的）
// integer indices ： 是指将key转化为53bit的无符号整型，然后再转会字符串 后依旧相等的 key。
// 如 '10', '2' 为integer indices。 '01', '12a' 不是 integer indices。

function convert(num) {

  var romanObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  var roman = '';

  for (var key in romanObj) {
    while (num >= romanObj[key]) {
      roman += key;
      num -= romanObj[key];
    }
  }

  return roman;

}

var result = convert(1362);

console.log(result);