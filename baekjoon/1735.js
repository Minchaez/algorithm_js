const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [A, B] = input[0].split(" ").map(Number);
const [A1, B1] = input[1].split(" ").map(Number);

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function solution() {
  // 최소 공배수 : 각 수를 최대 공약수로 나눈 두 수와 최대 공약수를 곱한 수
  // 최대 공약수 num
  const num = gcd(B, B1);

  // 분모
  const bottom = (B / num) * (B1 / num) * num;

  // 분자
  const top = A * (bottom / B) + A1 * (bottom / B1);

  // 기약분수 만들기
  const num1 = gcd(top, bottom);
  console.log(`${top / num1} ${bottom / num1}`);
}

solution();
