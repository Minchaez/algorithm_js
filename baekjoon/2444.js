const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();
const num = Number(input);

function solution() {
  for (let i = 1; i <= num; i++) {
    let line = " ".repeat(num - i) + "*".repeat(2*i - 1);
    console.log(line);
  }
  // 이건 감소
  for (let i = num - 1; i >= 1; i--) {
    let line = " ".repeat(num - i) + "*".repeat(2 * i - 1);
    console.log(line);
  }
}
solution();