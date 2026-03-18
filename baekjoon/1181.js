const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const strArr = input.slice(1);
const uniqueArr = [...new Set(strArr)];

function solution() {
  const sorted = uniqueArr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length; // 길이 짧은 순
    }
    return a < b ? -1 : 1;
  });
  console.log(sorted.join("\n"));
}
solution();
