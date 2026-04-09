const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function fac(num) {
  // (기억) BigInt형의 제일 뒤에는 "n"이 붙는다
  if (num <= 1) return 1n;

  return BigInt(num) * fac(num - 1);
}

function solution() {
  console.log(fac(input[0]).toString());
}

solution();
