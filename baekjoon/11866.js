const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 11866 요세푸스 문제 0
// (중요) 원으로 둘러싼 사람들 중 K 번째 사람들을 제거
// 제거한 사람의 순서를 순열로 나타낸 것이 요세푸스 순열
// 1 2 3 4 5 6 7
// -> 3, 6, 2, 5, 1, 4

// 1 2 3 4 5 6 7 8
// -> 3, 6, 1, 4, 7, 2, 5, 8

// 1 2 3 4 5 6
// -> 3, 6, 4, 1, 5, 2

function solution() {
  const N = input[0];
  const K = input[1];
  const Arr = Array.from({ length: N }, (_, i) => i + 1);
  const ans = [];

  while (Arr.length > 0) {
    for (let i = 0; i < K - 1; i++) {
      Arr.push(Arr.shift());
    }
    // K-1(인덱스는 0부터 시작하기에)번쨰 수 마다 ans에 Push하여
    // K번째 수를 넣을 수 있도록 함.
    ans.push(Arr.shift());
  }
  console.log(`<${ans.join(", ")}>`);
}

solution();
