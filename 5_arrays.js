// arrays
// it consists of di

let student = [1, "sonolax", "200kg", true];
let student2 = [2, "pikachu", "200kg", false];
console.log(student);

console.log(student[2]);
student[2] = "69kg";
console.log(student[2]);

// join method
console.log(student.join("__"));

console.log(student.indexOf("sonolax")); //case sensitive
console.log(student.concat(student2));

console.log(student.length);

// push and pop
student.push("why this");
console.log(student);
console.log(student.length);
console.log(student.pop());
console.log(student);

///==========
// arrays is a collection of an items
let rollNOS = [23, 56, 78, 43, 69, 12];
console.log(rollNOS);
console.log(rollNOS.length);
console.log(typeof rollNOS);
console.log(rollNOS[4]);

rollNOS[0] = 99;
console.log(rollNOS);

//looping array
// for loop
for (let i = 0; i < rollNOS.length; i++) {
  console.log(rollNOS[i]);
}

for (let element of rollNOS) {
  console.log(element);
}

// average of student marks
let studMarks = [97, 45, 67, 97, 88, 56];
let sum = 0;
for (let mark of studMarks) {
  sum = sum + mark;
}
let averageMarks = sum / studMarks.length;
console.log(averageMarks);

//offer applying of 10% on an items
let itemsPrice = [56, 399, 345, 675, 444];
console.log(itemsPrice);
for (let i = 0; i < itemsPrice.length; i++) {
  let offer = itemsPrice[i] / 10;
  let Actualoffer = Math.floor(offer);
  itemsPrice[i] -= Actualoffer;
}
console.log(itemsPrice);

let foodItems = ["poha", "chaiBiscuit", "rice", "masladosa"];
let numbers = [1, 23, 4];
console.log(foodItems); // before
foodItems.push("Pizza", "Burger");
console.log(foodItems); // after pushed at last index on original array itself
foodItems.pop();
console.log(foodItems); // popped last item on original array itself
let joinedArray = foodItems.concat(numbers);
console.log(joinedArray);
joinedArray.unshift(34); // to add element at first index in original array
console.log(joinedArray);
joinedArray.shift();
console.log(joinedArray); // to delete element at first index in original array
console.log(joinedArray.slice(2, 5)); // doesnot change on original array okay
console.log(joinedArray);
console.log(joinedArray.splice(0, 1, "lasjdflsjafjslad"));
console.log(joinedArray);
