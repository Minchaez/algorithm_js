const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function solution() {
  let sum = 0;
  for (let i = 1; i < input; i++) {
    sum += i;
  }
  console.log(sum);
  console.log(2);
}
solution();
