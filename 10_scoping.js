// global scope
// local scope/block scope
// functional scope

// area where variable is defined and can be accessed in that particular area only

// const and let is block scope variable
// while var is not

let a = 12;

if (1) {
  let b = 145;
  console.log(a);
  console.log(b);
}

console.log(a);
// console.log(b);
