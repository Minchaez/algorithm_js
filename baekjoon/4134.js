const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const Numbers = input.slice(1).map(Number);

// 소수 판별하는 함수
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  // for문을 끝까지 돈 경우
  return true;
}

function solution() {
  const result = [];
  for (let i = 0; i < N; i++) {
    // Numbers를 순회하며 각 수마다 isPrime함수 실행
    let targetNum = Numbers[i];

    // 계속 반복
    while (true) {
      // 만약 isPrime의 리턴 값이 true일 때(소수라고 판정 받았을 때)
      if (isPrime(targetNum)) {
        result.push(targetNum);
        break;
      }
      targetNum++;
    }
  }
  console.log(result.join(" "));
}

solution();
