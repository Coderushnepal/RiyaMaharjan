var nameList = [
  "Neeta Sapkota",
  "Neha Shiwakoti",
  "Srijana Khatiwada",
  "Smrity Dhakal",
  "Sami Chakradhar",
  "Kirtee Maharjan",
  "Trija Thebe",
  "Sindhu Aryal",
  "Kusum Ranjitkar",
  "Elisha Bista",
  "Rachana Kafle",
  "Barsha Maharjan",
  "Pooja Gurung",
  "Bisikha Subedi",
  "Kritika Baral",
  "Srijana Thulung",
];

//Question 1
//Convert the list of names in array of object
console.log("\nQuestion 1\n");
var obj = {};
result = [];
for (let i = 0; i < nameList.length; i++) {
  var splitted = nameList[i].split(" ");
  obj.id = i + 1;
  obj.firstName = splitted[0];
  obj.lastName = splitted[1];
  result[i] = obj;
  obj = {};
}
console.log(result);

//Question 2
//Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter.
console.log("\n\nQuestion 2\n");
function find(alphabet) {
  countFirstNames = result.filter(function (value) {
    return value.firstName[0] == alphabet.toUpperCase();
  });
  counter = countFirstNames.length;
  console.log(
    "find('" +
      alphabet +
      "') -> " +
      counter +
      " and " +
      (result.length - counter)
  );
}
find("s");
find("a");

//Question 3
// Convert the array of the result in Question 1
console.log("\n\nQuestion 3\n");
var getArrayFromQ1 = result;
var org = getArrayFromQ1.reduce(function (prev, current) {
  prev[current.id] = current;
  delete current.id;
  return prev;
}, {});
console.log(org);
