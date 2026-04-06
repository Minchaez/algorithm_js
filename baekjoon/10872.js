const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution() {
  const N = input;
  let ans = 1;
  // 팩토리얼

  for (let i = 1; i <= N; i++) {
    ans *= i;
  }

  console.log(ans);
}

solution();
