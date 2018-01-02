// Truncate a string

// 截断字符串

// （用瑞兹来截断对面的退路）

// 如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

// 切记，插入到字符串尾部的三个点号也会计入字符串的长度。

// 但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。

function truncate(str, num) {
  if (str.length > num) {
    if (num <= 3) {
      return str.slice(0, num) + '...';
    } else {
      return str.slice(0, num - 3) + '...';
    }
  }
  return str;
}

var result = truncate("Absolutely Longer", 2);
console.log(result)