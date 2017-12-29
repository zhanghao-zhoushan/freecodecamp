// Title Case a Sentence

// 句中单词首字母大写

// 确保字符串的每个单词首字母都大写，其余部分小写。

// 像'the'和'of'这样的连接符同理。

function titleCase(str) {

  str = str.toLowerCase().split(' ');
  var len = str.length;
  for (var i = 0; i < len; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');

}

console.log(titleCase("I'm a little tea pot"));

