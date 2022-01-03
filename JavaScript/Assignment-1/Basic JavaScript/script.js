// Q1 solution
function pattern(n) {
  let output = "";
  for (let i = 0; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      output = output.concat("*");
    }
    output = output.concat("\n");
  }
  return output;
}

// Q1 Output
console.log(" Answer 1 : \n\n");
console.log(pattern(5));

// Q2 solution
function censor(str) {
  let result = "";
  words = str.split(" ");
  for (i = 0; i < words.length; i++) {
    var len = words[i].length;
    if (len > 4) {
      result = result + "*".repeat(len) + " ";
    } else {
      result = result + words[i] + " ";
    }
  }
  return result;
}

// Q2 Output
console.log(" \n\nAnswer 2 : \n\n");
console.log(censor("The code is fourty"));
console.log(censor("Two plus three is five"));
console.log(censor("aaaa aaaaa 1234 12345"));

// Q3 solution
function toArray(obj) {
  let keys = Object.keys(obj);
  let len = keys.length;
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push([keys[i], obj[keys[i]]]);
  }
  return arr;
}

// Q3 Output
console.log(" \n\nAnswer 3 : \n\n");
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));

// Q4 solution
function identicalFilter(arr) {
  let identical = [];
  let k = 0;
  for (i = 0; i < arr.length; i++) {
    let repeat = new Set(arr[i]);
    if (repeat.size === 1) {
      identical[k++] = arr[i];
    }
  }
  return identical;
}

// Q4 Output
console.log(" \n\nAnswer 4 : \n\n");
console.log(identicalFilter(["88", "999", "22", "545", "133"]));
console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));

// Q5 solution
function keysAndValues(obj) {
  let keys = Object.keys(obj);
  keys.sort();
  let values = [];
  for (i = 0; i < keys.length; i++) {
    values[i] = obj[keys[i]];
  }
  return [keys, values];
}

// Q5 Output
console.log(" \n\nAnswer 5 : \n\n");
console.log(keysAndValues({ b: "Microsoft", a: "Apple", c: "Google" }));
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
