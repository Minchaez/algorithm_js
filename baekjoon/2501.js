const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution() {
  const yaksu = [];
  const [N, M] = input;
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      yaksu.push(i);
    }
  }
  console.log(yaksu[M - 1] !== undefined ? yaksu[M - 1] : 0);
}
solution();
