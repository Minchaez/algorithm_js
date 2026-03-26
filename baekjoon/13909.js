const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const N = Number(input);
function solution() {
  console.log(Math.floor(Math.sqrt(N)));
}

solution();
