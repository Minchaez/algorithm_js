const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [T, ...Num] = input;

function solution() {
  for (let i = 0; i < T; i++) {
    // 잔돈 거스르는 조건식
    let Money = Num[i];

    let Q = Math.floor(Money / 25);
    Money %= 25;
    let D = Math.floor(Money / 10);
    Money %= 10;
    let N = Math.floor(Money / 5);
    Money %= 5;
    let P = Money;

    console.log([Q, D, N, P].join(" "));
  }
}
solution();
