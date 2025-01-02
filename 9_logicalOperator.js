let passCode = "switzerland@";
let condition = false;
// && both must be true
if (passCode.length > 9 && passCode.includes("@")) {
  console.log("passcode is strong strawhat!!!");
} else {
  console.log("your life is in danger");
}

// || one should be true
if (passCode.length > 19 || passCode.includes("@")) {
  console.log("passcode is strong strawhat!!!");
} else {
  console.log("your life is in danger");
}

// ! interchange the boolean value
if (!condition) {
  console.log("! it changes false into true that's why you can see me");
}
