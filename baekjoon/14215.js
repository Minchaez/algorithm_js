const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution() {
  // 세 개의 막대를 가지고 있음.
  // 이를 사용해서 가능한 둘레가 가장 긴 삼각형을 만들어야 함.
  let isTriangle = false;
  // 오름차순 정렬
  input.sort((x, y) => x - y);
  let [s1, s2, max] = input;
  // 1. 먼저 세 막대를 그대로 사용했을 때 삼각형을 만들 수 있는지 판별해야함.
  // 아니라면 가장 긴 막대의 길이를 1씩 줄여가면서 반복시키면 됨.
  while (s1 + s2 <= max) {
    max -= 1;
  }
  console.log(s1 + s2 + max);
}
solution();
