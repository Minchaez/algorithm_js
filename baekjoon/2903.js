const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();
const n = Number(input);
function solution() {
  // 점 공식
  // (2^n + 1)^2
  const n = Number(input);
  const result = (2 ** n + 1) ** 2;
  return result;
}
console.log(solution());
