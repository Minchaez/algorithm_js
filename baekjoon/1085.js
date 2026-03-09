const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [x, y, w, h] = input;

function solution() {
  return Math.min(x, y, w - x, h - y);
}
console.log(solution());
