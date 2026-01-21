const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/);

a = parseInt(input[0]);
b = parseInt(input[1]);
c = parseInt(input[2]);

function solution(A, B, C) {
  if (A === B && B === C) {
    console.log(10000 + A * 1000);
  } else if (A === B || A === C) {
    console.log(1000 + A * 100);
  } else if (B === C) {
    console.log(1000 + B * 100);
  } else {
    console.log(Math.max(A, B, C) * 100);
  }
}

solution(a, b, c);
