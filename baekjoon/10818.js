const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function solution() {
  const [Case, ...Numbers] = input;
  console.log(`${Math.min(...Numbers)} ${Math.max(...Numbers)}`)
}

solution();