const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let result = 0;
// function solution() {
//   for(let i = 0; i<input.length; i++){
//     switch(input[i]) {
//       case "A":
//       case "B":
//       case "C":
//         result += 3;
//         break;
//       case "D":
//       case "E":
//       case "F":
//         result += 4;
//         break;
//       case "G":
//       case "H":
//       case "I":
//         result += 5;
//         break;
//       case "J":
//       case "K":
//       case "L":
//         result += 6;
//         break;
//       case "M":
//       case "N":
//       case "O":
//         result += 7;
//         break;
//       case "P":
//       case "Q":
//       case "R":
//       case "S":
//         result += 8;
//         break;
//       case "T":
//       case "U":
//       case "V":
//         result += 9;
//         break;
//       case "W":
//       case "X":
//       case "Y":
//       case "Z":
//         result += 10;
//         break;
//     }
//   }
//   console.log(result);
// }

// 위 코드는 너무 길어 읽을 때 불편할 수도 있음.
// 객체를 사용한 방법
const dial = {
  A: 3, B: 3, C: 3,
  D: 4, E: 4, F: 4,
  G: 5, H:5, I: 5,
  J: 6, K: 6, L: 6,
  M: 7, N: 7, O: 7,
  P: 8, Q: 8, R: 8, S: 8,
  T: 9, U: 9, V: 9,
  W: 10, X: 10, Y: 10, Z: 10
};

function solution() {
  for (let i = 0; i < input.length; i++){
    const char = input[i];
    result += dial[char];
  }
  console.log(result);
}

solution();