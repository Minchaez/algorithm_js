const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const Arr = input.slice(1).toString().split(" ").map(Number);

// 좌표 압축
// 가장 작은 입력 값은 0
// 입력 값이 커질 때마다 출력 값은 1찍 증가.
// ex) 입력 : 2 4 -10 4 -9
// ->  출력 : 2 3 1 3 0

// function solution() {
//   let result = [];
//   // 1. 먼저 입력 값에서 중복을 제거한 오름차순 배열을 만듦.
//   let setArr = [...new Set(Arr)].sort((a, b) => a - b);
//   // 2. 입력 값 배열의 인덱스를 돌면서 1번에서 만든 배열의 값과 비교 후 인덱스 반환.
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < setArr.length; j++) {
//       if (Arr[i] === setArr[j]) {
//         result.push(j);
//       }
//     }
//   }
//   console.log(result.join(" "));
// }
// -> 1차 제출 풀이법은 맞았으나 시간 초과
// why? 2중 for문 N(최대 1,000,000) 곱하기 xi(플마 10억)
// 무조건 시간 초과

function solution() {
  let setArr = [...new Set(Arr)].sort((a, b) => a - b);

  // setArr에 인덱스를 같이 매핑하기(키:값 쌍의 형태로)
  // { -10: 0, -9: 1, 2: 2, 4: 3 } 처럼
  const dict = new Map();
  setArr.forEach((val, idx) => {
    dict.set(val, idx);
  });

  let result = [];
  for (let i = 0; i < N; i++) {
    result.push(dict.get(Arr[i]));
  }
  console.log(result.join(" "));
}
solution();
