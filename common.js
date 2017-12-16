
  // Finders Keepers

  function find(arr, func) {
    var filtered = arr.filter(function (num) {
      return func(num);
    });
    return filtered[0];
  }

  find([1, 2, 3, 4], function (num) { return num % 2 === 0; });


  // Drop it

  function drop(arr, func) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      if (!func(arr[0])) {
        arr.shift();
      } else {
        return arr;
      }
    }
    return [];
  }

  drop([1, 2, 3], function (n) { return n < 3; });


  // Steamroller

  function steamroller(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(steamroller(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

  steamroller([1, [2], [3, [[4]]]]);

  // Binary Agents
  function binaryAgent(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      arr[i] = String.fromCharCode(parseInt(Number(element), 2));
    }
    return arr.join('');
  }
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
