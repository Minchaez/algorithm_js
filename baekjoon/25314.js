const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function solution() {
  const N = input/4;
  let result = "";
  for(i = 0; i < N; i++) {
    result += "long "
  }
  console.log(result + "int");
}

solution();
