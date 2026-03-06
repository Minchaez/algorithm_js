const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();
// .split("\n");

let N = Number(input);

function solution() {
  let result = [];
  for (let i = 2; i <= N; i++) {
    while (N % i === 0) {
      result.push(i);
      N /= i;
    }
  }
  console.log(result.join("\n"));
}
solution();
