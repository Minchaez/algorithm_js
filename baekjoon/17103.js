const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input[0];
const Numbers = input.slice(1);
function solution() {
  // 먼저 max값을 기준으로 배열을 만들어서 어디서든 써먹을 수 있는 배열 만들어놓기.
  const max = 1000000;
  const isPrime = new Array(max + 1).fill(true);

  // 0부터 시작한다고 가정하고 0과 1은 소수로 판정하면 안되기에
  // 지정 예외처리
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(max); i++) {
    // 소수를 찾았다면 그 수를 제외하고 그 수의 배수를 모두 없애면 됨.
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  // N의 최댓값(1,000,000)까지 소수 판별 완료

  const result = [];
  for (let num of Numbers) {
    // 종료 조건
    if (num === 0) break;

    let cnt = 0;
    for (let i = 2; i <= num / 2; i++) {
      if (isPrime[i] && isPrime[num - i]) cnt++;
    }
    result.push(cnt);
  }
  console.log(result.join("\n"));
}

solution();
