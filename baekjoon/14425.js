const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const strArr = input.slice(1);

const setArr = new Set(strArr.slice(0, N));

const Target = strArr.slice(N);

function solution() {
  let cnt = 0;
  for (let i = 0; i < Target.length; i++) {
    if (setArr.has(Target[i])) cnt++;
  }
  console.log(cnt);
}

solution();
