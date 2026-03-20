const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const numberCards = input[1].split(" ").map(Number);
const M = Number(input[2]);
const targets = input[3].split(" ").map(Number);

function solution() {
  // 숫자별 카드 개수를 저장할 Map 생성
  const cardMap = new Map();

  for (let i = 0; i < N; i++) {
    const num = numberCards[i];
    // Map 안에 카드 숫자와 그 카드의 개수를 한 쌍으로 묶음.
    // cardMap에서 수를 가져오고 있으면 + 1 없으면 0을 더하여
    // 카드의 총 개수를 파악할 수 있음.
    cardMap.set(num, (cardMap.get(num) || 0) + 1);
  }

  const result = [];
  for (let i = 0; i < M; i++) {
    const target = targets[i];
    result.push(cardMap.get(target) || 0);
  }

  console.log(result.join(" "));
}

solution();
