const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [Num, N] = input;

function solution() {
  const result = Num.toString(N);

  return result.toUpperCase();
}
console.log(solution());
