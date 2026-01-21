const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

function solution(A, B, C) {
  console.log(A + B + C);
}

solution(a, b, c);
