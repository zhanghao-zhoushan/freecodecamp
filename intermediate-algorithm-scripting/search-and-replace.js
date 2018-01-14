// Search and Replace
// 使用给定的参数对句子执行一次查找和替换，然后返回新句子。

// 第一个参数是将要对其执行查找和替换的句子。

// 第二个参数是将被替换掉的单词（替换前的单词）。

// 第三个参数用于替换第二个参数（替换后的单词）。

// 注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。

// 如果你被难住了，记得使用 Read - Search - Ask尝试与他人结伴编程、编写你自己的代码。

// 这是一些对你有帮助的资源:

// Array.splice()
// String.replace()
// Array.join()

function myReplace1(str, before, after) {

  var arr = str.split(' ');

  arr.map(function (item, i) {
    if (item === before) {
      if (item[0] === item[0].toUpperCase()) {
        after = after.substr(0, 1).toUpperCase() + after.substr(1);
      }
      arr[i] = after;
    }
  })

  return arr.join(' ');

}

// use RegExp
function myReplace(str, before, after) {

  var re = new RegExp(before, 'g');
  if (/^[A-Z]/.test(before)) {
    after = after.substr(0, 1).toUpperCase() + after.substr(1);
  }

  return str.replace(re, after);

}

var result = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

console.log(result);
