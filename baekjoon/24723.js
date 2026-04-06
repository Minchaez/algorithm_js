const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution() {
  const N = input;
  // 녹색 거탑
  // 모든 경우의 수니까 2 ** N

  console.log(2 ** N);
}

solution();
