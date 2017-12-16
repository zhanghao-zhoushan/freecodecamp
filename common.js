// Finders Keepers

function find(arr, func) {
  var filtered = arr.filter(function (num) {
    return func(num);
  });
  return filtered[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });


