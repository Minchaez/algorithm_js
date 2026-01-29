const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let numArr = input.split(" ").map(Number);
let result = [];
let chess = [1, 1, 2, 2, 2, 8];
function solution() {
  for(let i = 0; i<chess.length; i++) {
    result.push(chess[i] - numArr[i]);
  }
  console.log(result.join(" "));
}

solution();