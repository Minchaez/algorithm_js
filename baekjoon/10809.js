const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const alphabets = [];
const baekjoon = input.split("");
let result = [];
// function solution() {
//   for(let i = 97; i <= 122; i++){
//     alphabets.push(String.fromCharCode(i));
//   }
//   for(let i = 0; i < alphabets.length; i++){
//     const match = baekjoon.indexOf(alphabets[i]);
//     result.push(match);
//   }
//   console.log(result.join(" "));
// }

// 더 좋은? 최신? 풀이
const answer = Array.from({ length: 26 }, (_, i) => i + 97) // [97, 98, ..., 122]
  // 이제 map으로 순회하면서 input(example.txt에 들어간 문자열)에다가 indexOf매서드 사용
  // String.fromCharCode(code)는 a, b, c 형태로 쭉 넣는 구조
  .map(code => input.indexOf(String.fromCharCode(code)))     // 각 코드를 문자로 바꿔 위치 찾기
  .join(" ");                                               // 공백으로 합치기

console.log(answer);
solution();