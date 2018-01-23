// Convert HTML Entities 

// 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。

// 如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

// 这是一些对你有帮助的资源:

// RegExp
// HTML Entities

function convert(str) {

  var reg = /[&<>"']/g;
  var local = str;

  local = local.replace(reg, function (char) {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&apos;';
    }
  });

  return local;

}

var result = convert("Dolce & Gabbana");

console.log(result)