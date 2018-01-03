// Falsy Bouncer

// 过滤数组假值

// （真假美猴王）

// 删除数组中的所有假值。

// 在JavaScript中，假值有false、null、0、""、undefined 和 NaN。


function bouncer(arr) {

  return arr.filter(function (item) {
    return !!item;
  });

}

var result = bouncer([7, "ate", "", false, 9]);
console.log(result);

