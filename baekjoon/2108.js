const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution() {
  const N = input[0];
  const Arr = input.slice(1).sort((a, b) => a - b);
  const cntMap = new Map();
  let sum = 0;
  for (let i = 0; i < N; i++) {
    // 최빈값: N개의 수들 중 가장 자주 나타나는 값
    // 구하는 아이디어
    // 데이터를 한 번 순회하면서 Map 객체에
    // 숫자: 등장 횟수
    // 형태로 저장하면 됨.
    cntMap.set(Arr[i], (cntMap.get(Arr[i]) || 0) + 1);
    sum += Arr[i];
  }
  // 최대 빈도수 찾기
  const maxCnt = Math.max(...cntMap.values());

  const candidates = [];

  // 최대 빈도수와 동일한 value를 가지고 있는 수를 후보 배열에 push
  for (const [num, cnt] of cntMap) {
    if (cnt === maxCnt) {
      candidates.push(num);
    }
  }

  // 오름차순 정렬
  candidates.sort((a, b) => a - b);
  // 산술평균: N개의 수들의 합을 N으로 나눈 값(평균)
  console.log(Math.round(sum / N) || 0);
  // 중앙 값: 수들을 오름차순으로 정렬했을 때 그 중앙에 위치하는 값
  console.log(Arr[(Arr.length - 1) / 2]);
  // 최대 빈도가 같은 수가 하나를 넘어간다면 2번째로 작은 값 출력하는 조건 추가
  console.log(candidates.length > 1 ? candidates[1] : candidates[0]);

  console.log(Arr[Arr.length - 1] - Arr[0]);
}

solution();
