const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const Trees = input.slice(1).map(Number);

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution() {
  let commonGcd = Trees[1] - Trees[0];

  // 모든 간격에 대해 현재 gcd와 새로운 간격의 gcd를 비교 갱신
  for (let i = 2; i < N; i++) {
    commonGcd = gcd(commonGcd, Trees[i] - Trees[i - 1]);
  }
  // 가장 끝 위치에서 첫 나무 위치 빼고 최대공약수로 나누면 나무 심어야할 모든 위치가 나옴.
  const totalGaps = (Trees[N - 1] - Trees[0]) / commonGcd;
  // 이미 박혀있는 나무의 개수를 차감
  const ans = totalGaps - (Trees.length - 1);
  console.log(ans);
}

solution();
