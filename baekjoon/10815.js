const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const M = Number(input[2]);
const numbers = input[3].split(" ").map(Number);

function solution() {
  const CardMap = new Set(cards);

  let result = [];
  for (let i = 0; i < M; i++) {
    if (CardMap.has(numbers[i])) {
      result.push(1);
    } else result.push(0);
  }
  console.log(result.join(" "));
}

solution();
