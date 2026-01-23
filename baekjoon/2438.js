const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function solution() {
  const Case = input;
  for(let i = 1; i <= Case; i++) {
    console.log("*".repeat(i));
  }

}

solution();
