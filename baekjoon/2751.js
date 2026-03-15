const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const scores = input.slice(1).map(Number);

function solution() {
  const sortedArr = scores.sort((x, y) => x - y);
  console.log(sortedArr.join("\n"));
}
solution();
