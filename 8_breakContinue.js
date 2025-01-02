// continue it will skip that part and will continue later
for (i = 1; i < 12; i++) {
  if (i === 6) {
    continue;
  }
  console.log(`the numbers are: ${i}`);
}

console.log(" ");

// break will end the operation as soon as it reaches that part
for (i = 1; i < 12; i++) {
  if (i === 6) {
    break;
  }
  console.log(`the numbers are: ${i}`);
}
