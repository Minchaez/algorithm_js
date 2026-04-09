const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function fibo(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  if (num === 2) return 1;

  return fibo(num - 1) + fibo(num - 2);
}

function solution() {
  console.log(fibo(input[0]));
}

solution();
