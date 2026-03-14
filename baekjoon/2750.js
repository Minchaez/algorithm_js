const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const Arr = input.slice(1);

function solution() {
  Arr.sort((x, y) => x - y);
  console.log(Arr.join("\n"));
}
solution();
