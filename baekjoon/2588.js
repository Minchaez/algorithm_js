const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

function solution(A, B) {
  const one = B % 10;
  console.log(A * one);
  const ten = Math.floor((B % 100) / 10);
  console.log(A * ten);
  const hund = Math.floor(B / 100);
  console.log(A * hund);
  console.log(A * B);
}

solution(a, b);
