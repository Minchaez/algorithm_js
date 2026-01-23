const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function solution() {
  const K = input;
  let sum = 0;
  for(i=1; i<=K; i++) {
    sum += i;
  }
  console.log(sum)
}

solution();