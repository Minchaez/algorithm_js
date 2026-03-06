const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let M = Number(input[0]);
const N = Number(input[1]);

function isPrime() {
  const primes = [];
  let result = 0;

  for (M; M <= N; M++) {
    let isPrime = true;
    if (M < 2) continue;
    for (let i = 2; i < M; i++) {
      // i가 1인 경우는 스킵
      if (M % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(M);
      result += M;
    }
  }
  if (primes.length === 0) {
    console.log(-1);
  } else {
    console.log(result);
    console.log(primes[0]);
  }
}

function solution() {
  isPrime();
}
solution();
