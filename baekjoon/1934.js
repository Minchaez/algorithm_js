const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const T = input[0];

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function solution() {
  let result = [];
  // 두 수 중 더 작은 수까지 1씩 증가 순회하면서 공약수 찾기
  for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    result.push((A * B) / gcd(A, B));
  }
  console.log(result.join("\n"));
}

solution();
