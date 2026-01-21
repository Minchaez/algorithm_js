const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split(" ");

a = parseInt(input[0]);
// b = parseInt(input[1]);

function solution(A) {
  if (A % 4 === 0) {
    if (A % 100 !== 0 || A % 400 === 0) {
      console.log("1");
    } else {
      console.log("0");
    }
  } else {
    console.log("0");
  }
}

solution(a);
