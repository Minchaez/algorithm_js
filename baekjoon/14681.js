const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const input = fs.readFileSync(filePath).toString().trim().split(" ");
// 해당 문제의 로직은 문제 없으나 백준 환경으로 인해 런타임에러(EACCES)발생
a = parseInt(input[0]);
b = parseInt(input[1]);

function solution(A, B) {
  if (A > 0) {
    if (B > 0) {
      console.log("1");
    } else if (B < 0) {
      console.log("4");
    }
  } else {
    if (B > 0) {
      console.log("2");
    } else {
      console.log("3");
    }
  }
}

solution(a, b);
