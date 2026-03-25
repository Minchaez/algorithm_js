const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// function isPrime(num) {
//   if (num < 2) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// // N부터 M이하 소수 판별하는 문제
// function solution() {
//   const result = [];
//   for (let i = 0; i < input.length; i++) {
//     let count = 0;
//     // 종료 조건
//     if (input[i] === 0) break;

//     for (let j = input[i] + 1; j <= input[i] * 2; j++) {
//       if (isPrime(j)) {
//         count += 1;
//       }
//     }
//     result.push(count);
//   }
//   console.log(result.join("\n"));
// }

// 위 풀이법은 로직은 맞으나, 시간 초과

// 에라토스테네스의 체
function solution() {
  // 먼저 max값을 기준으로 배열을 만들어서 어디서든 써먹을 수 있는 배열 만들어놓기.
  const max = 123456 * 2;
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

  const result = [];
  for (let num of input) {
    // 종료 조건
    if (num === 0) break;

    let cnt = 0;
    for (let i = num + 1; i <= num * 2; i++) {
      if (isPrime[i]) cnt++;
    }
    result.push(cnt);
  }
  console.log(result.join("\n"));
}

solution();
