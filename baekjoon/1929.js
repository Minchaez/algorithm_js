const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// N부터 M이하 소수 판별하는 문제
function solution() {
  const result = [];
  for (let i = N; i <= M; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  console.log(result.join("\n"));
}

solution();
