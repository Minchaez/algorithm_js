const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [A, B] = input[0].split(" ").map(Number);
const setA = input[1].split(" ").map(Number);
const setB = input[2].split(" ").map(Number);

function solution() {
  let result = 0;
  // 결국 중복되는 거만 빼면 되는 거 아닌가?
  const setBSet = new Set(setB);
  const setASet = new Set(setA);
  for (let i = 0; i < A; i++) {
    if (!setBSet.has(setA[i])) result++;
  }
  for (let i = 0; i < B; i++) {
    if (!setASet.has(setB[i])) result++;
  }
  console.log(result);
}

solution();
