console.log("----------Assignment 2----------");

// Question 1
//Return Something to Me!
function giveMeSomething (text){
    return ("something "+ text);
}

//Answer 1
console.log("\n\n-----Answer 1-----");
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

//Question 2
//Word without First Character
function newWord(word){
    return (word.substr(1));
}

//Answer 2
console.log("\n\n-----Answer 2-----");
console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("plum"));