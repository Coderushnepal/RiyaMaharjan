console.log("----------Array Assignment----------\n\n");

//Question 1 -> Return Types
console.log("----Question 1----\n");
//Solution
function arrayValuesTypes(values) {
    valueType = [];
    for (i = 0; i < values.length; i++) valueType[i] = typeof values[i];
    console.log(valueType);
}

//Answer 1
arrayValuesTypes([1, 2, "null", []]);
arrayValuesTypes(["214", true, false, 2, 2.15, [], null]);
arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]);

//Question 2 -> Filter out Strings from an Array
console.log("\n\n----Question 2----\n");
//Solution
function filterArray(array) {
    filtered = [];
    var j = 0;
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] != "string") {
            filtered[j++] = array[i];
        }
    }
    console.log(filtered);
}
//Answer 2
filterArray([1, 2, "a", "b"]);
filterArray([1, "a", "b", 0, 15]);
filterArray([1, 2, "aasf", "1", "123", 123]);
