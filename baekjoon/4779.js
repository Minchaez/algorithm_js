const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = [];

function Cantor(start, len, Arr) {
  if (len === 1) return;

  const third = len / 3;

  for (let i = start + third; i < start + 2 * third; i++) {
    Arr[i] = " ";
  }

  Cantor(start, third, Arr);

  Cantor(start + 2 * third, third, Arr);
}

function solution() {
  for (let i = 0; i < input.length; i++) {
    const num = Math.pow(3, input[i]);
    let Arr = Array(num).fill("-");

    Cantor(0, num, Arr);
    result.push(Arr.join(""));
  }
  console.log(result.join("\n"));
}

solution();
