const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution() {
  const [N, K] = input;
  let ans = 1;
  let a = 1;
  let b = 1;
  let c = 1;

  for (let i = 1; i <= N; i++) {
    a *= i;
  }

  for (let j = 1; j <= K; j++) {
    b *= j;
  }

  for (let k = 1; k <= N - K; k++) {
    c *= k;
  }

  console.log(a / (b * c));
}

solution();
