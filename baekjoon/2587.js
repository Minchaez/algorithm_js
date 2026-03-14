const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const Arr = input;

function solution() {
  let sum = 0;
  let avg = 0;
  Arr.sort((x, y) => x - y);
  for (let i = 0; i < Arr.length; i++) {
    sum += Arr[i];
    avg = sum / Arr.length;
  }
  console.log(avg);
  console.log(Arr[Math.floor(Arr.length / 2)]);
}
solution();
