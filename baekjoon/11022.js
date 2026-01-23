const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function solution() {
  const [Case, ...Numbers] = input;
  let sum = 0;
  for(i = 0; i < Case; i++) {
    const A = Numbers[i * 2]
    const B = Numbers[i * 2 + 1]
    sum = A+B;
    console.log(`Case #${i+1}: ${A} + ${B} = ${sum}`);
  }
}

solution();
