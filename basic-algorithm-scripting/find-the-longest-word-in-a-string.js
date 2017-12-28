// Find the Longest Word in a String

// 找出最长单词

// 在句子中找出最长的单词，并返回它的长度。

// 函数的返回值应该是一个数字。

function findLongestWord(str) {
  var arr = str.split(' ');
  var len = arr.length;
  var max = 0;
  for (var i = 0; i < len; i++) {
    if (arr[i].length > max) {
      max = arr[i].length
    }
  }
  return max;
}


// reduce

var len = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(len)