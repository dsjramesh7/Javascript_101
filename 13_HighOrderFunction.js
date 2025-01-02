// passing function as an arguement in another function is called higher order function

let sum = (num1, num2) => {
  return num1 + num2;
};

let values = (a, b, add) => {
  return add(a, b);
};

console.log(values(12, 34, sum));
