const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split(" ");

a = parseInt(input[0]);
b = parseInt(input[1]);

function solution(A, B) {
  B -= 45;

  if (B < 0) {
    B += 60;
    A -= 1;
  }

  if (A < 0) {
    A = 23;
  }
  console.log(`${A} ${B}`);
}

solution(a, b);
