//variable : variable are container to store value.
var a = 12;
console.log(a);

// var let and Const

// =========================var=============================
// can be redeclared and reinitialized with a value
// mostly do not use this
var we = 12;
console.log(we);
var we = 14;
console.log(we);
we = 57;
console.log(we);

// ===========================let===========================
let fullName = "luffy";
console.log(fullName);
// cannot be redeclared
// but can be reinitialized
// also can be declared without initialization
let re;
console.log(re);
let le = 45;
// let le = 56; will give error
le = 12;
console.log(le);

// =========================const ===================================
// cannot be redeclared and reinitialzed
// cannot leave declration without initialization
// const qw; will give error
const t = 45;
console.log(t);
// t = 23;
// console.log(t); will give errror
