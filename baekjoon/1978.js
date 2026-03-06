const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

function solution() {
  // 결과값 result
  let result = 0;
  // 숫자 돌기
  for (const num of numbers) {
    // 약수가 있으면 증가하는 count
    let count = 0;
    if (num === 1) continue;
    // 각 숫자의 약수 찾기
    for (let i = 1; i < num / 2 + 1; i++) {
      if (i === 1) continue;
      if (num % i === 0) {
        count++;
        break; // 하나라도 약수를 찾으면 해당 반복문은 돌 필요가 없음
      }
    }
    if (count === 0) result += 1;
  }
  console.log(result);
}
solution();
