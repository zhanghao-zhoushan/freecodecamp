// Chunky Monkey 

// 猴子吃香蕉, 分割数组

// （猴子吃香蕉可是掰成好几段来吃哦）

// 把一个数组arr按照指定的数组大小size分割成若干个数组块。

// 例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

// chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];

function chunk(arr, size) {
  var result = [];
  var temp = [];
  var index = 0;
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    temp.push(arr[i]);
    index++;
    if (index === size || i === len - 1) {
      result.push(temp);
      temp = [];
      index = 0;
    }
  }
  return result;
}

// use slice
function chunk(arr, size) {
  var result = [];
  var len = arr.length;
  var temp = [];
  for (var i = 0; i < len; i += size) {
    temp = arr.slice(i, i + size);
    result.push(temp)
    temp = []
  }
  return result;
}

var result = chunk(["a", "b", "c", "d"], 2);

console.log(result)