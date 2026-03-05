const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution() {
  for (let num of input) {
    let sum = 0;
    let yaksu = [];
    if (num === -1) break;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        yaksu.push(i);
        sum += i;
      }
    }
    if (sum === num) {
      console.log(`${num} = ${yaksu.join(" + ")}`);
    } else {
      console.log(`${num} is NOT perfect.`);
    }
  }
}
solution();
