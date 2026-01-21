const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/);

a = parseInt(input[0]);
b = parseInt(input[1]);
c = parseInt(input[2]);

function solution(A, B, C) {
  B += C;

  if (B >= 60) {
    PlusHour = Math.floor(B / 60);
    B %= 60;
    A += PlusHour;
  }

  if (A >= 24) {
    A %= 24;
  }
  console.log(`${A} ${B}`);
}

solution(a, b, c);
