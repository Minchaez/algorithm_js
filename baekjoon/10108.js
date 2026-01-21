const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = parseInt(input[0]);

function solution(A) {
  console.log(A - 543);
}

solution(a);
