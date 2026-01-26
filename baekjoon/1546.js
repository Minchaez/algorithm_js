const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);
const [N, ...Numbers] = input;

let sum = 0;
const maxScore = Math.max(...Numbers);
function solution() {
  for(let i = 0; i < N; i ++) {
    sum += Numbers[i]/maxScore*100;
  }
  console.log(sum/N);
}
solution();