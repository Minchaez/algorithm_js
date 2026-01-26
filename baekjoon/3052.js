const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);
// 1. 일단 입력받은 배열 42로 나누기
// 2. 이중 배열로 값 비교?
// 3. 같은 값이 있을 때, 배열의 해당 인덱스 pop
// 4. 배열.length 출력
function solution() {
  const arr = input.map(num => num % 42);
  const result = new Set(arr);
  console.log(result.size);
}
solution();