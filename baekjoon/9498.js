const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split(" ");

a = parseInt(input[0]);
// b = parseInt(input[1]);

function solution(A) {
  if (A > 89) {
    console.log("A");
  } else if (A > 79) {
    console.log("B");
  } else if (A > 69) {
    console.log("C");
  } else if (A > 59) {
    console.log("D");
  } else {
    console.log("F");
  }
}

solution(a);
