// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// function as paremeter and arguements
// function declaration/ function statement
function sum(a, b) {
  console.log(a + b);
}
sum(12, 67);

// function expression
let a = function (value) {
  console.log(`the value is: ${value}`);
};
a(12);

// arrow function
let arrow = () => console.log("yowai mo!!!");

arrow();

//IIFE
(function () {
  console.log("jaldi kar panvel jaana hai!!!");
})();

//return

//===============
// function defination/statement
function sum(a, b) {
  // here sum(a,b) are parameter
  console.log(a + b);
}
sum(14, 56); // function invoked/called   // here sum(a,b) are arguements

// arrow function
const divide = (a, b) => console.log(a / b);
divide(9, 3);

// count vowels in a string
const countVowelsInString = (str) => {
  let count = 0;
  for (let character of str) {
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(countVowelsInString("abcd"));

//callback function
//A callback is a function passed as an argument to another function.
let skill = ["dance", "cook", "write", "read"];

skill.forEach((eachElement, index, skill) => {
  console.log(
    `Element at ${index} in uppercase ${eachElement.toUpperCase()} from array of skill ${skill}`,
    skill
  );
});

function sum(a, b) {
  console.log(a + b);
}

function cal(a, b, sumCallbackFunction) {
  sumCallbackFunction(a, b);
}

cal(12, 34, sum);
// High Order Function
//In JavaScript, a higher-order function is a function that can accept other functions as arguments, return functions, or both. They enable abstraction, composition, and the creation of more flexible and reusable code.

let num = [1, 2, 3, 4, 5];
num.forEach((element) => {
  console.log(Math.pow(element, 2));
});
