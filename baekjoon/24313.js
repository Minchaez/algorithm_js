const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const [a1, a0, c, n] = input;

function solution() {
  // 기울기도 체크해주어야 함.
  if (a1 * n + a0 <= c * n && a1 <= c) {
    console.log(1);
  } else {
    console.log(0);
  }
}
solution();
