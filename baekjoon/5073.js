const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution() {
  for (let i = 0; i < input.length; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    // 1. 종료 조건
    if (a === 0 && b === 0 && c === 0) break;

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      // 삼각형 조건 충족하지 못했을 때
      console.log("Invalid");
    } else if (a === b && b === c && a === c) {
      // 세 변 길이 같을 때
      console.log("Equilateral");
    } else if (a === b || b === c || a === c) {
      // 두 변 길이 같을 때
      console.log("Isosceles");
    } else {
      // 세 변의 길이 모두 다를 때
      console.log("Scalene");
    }
  }
}
solution();
