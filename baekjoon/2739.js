const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/);

a = parseInt(input[0]);
// b = parseInt(input[1]);
// c = parseInt(input[2]);

function solution(A) {
  for(i = 1; i < 10; i++) {
    console.log(`${a} * ${i} = ${a*i}`)
  }
}

solution(a);
