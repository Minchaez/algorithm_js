const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map(Number);

function solution() {
  const sortedArr = input.sort((x, y) => y - x);
  console.log(sortedArr.join(""));
}
solution();
