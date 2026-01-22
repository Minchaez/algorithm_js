const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/);

a = parseInt(input[0]);
b = parseInt(input[1]);
c = parseInt(input[2]);
let result = "";
function solution(A, B, C) {
  for(i = 0; i < A; i++) {
    B = parseInt(input[1+2*i])
    C = parseInt(input[2+2*i])
    const sum = B + C;
    result += sum + "\n";
  }
  console.log(result);
}

solution(a, b, c);
