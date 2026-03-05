const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const matrix = input.map((line) => line.split(" ").map(Number));

function solution() {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    // 각 줄을 공백으로 나눠서 숫자 두 개(n1, n2)를 가져옵니다.
    const [n1, n2] = input[i].split(" ").map(Number);

    // 종료 조건: 0 0
    if (n1 === 0 && n2 === 0) break;

    // 조건 판별
    if (n2 % n1 === 0) {
      result += "factor\n";
    } else if (n1 % n2 === 0) {
      result += "multiple\n";
    } else {
      result += "neither\n";
    }
  }
  console.log(result.trim());
}
solution();
