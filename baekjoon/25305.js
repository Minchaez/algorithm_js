const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const scores = input[1].split(" ").map(Number);

function solution() {
  const sortedArr = scores.sort((x, y) => x - y);
  console.log(sortedArr[N - K]);
}
solution();
