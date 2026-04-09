const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 팰린드롬: 앞에서 읽었을 때랑 뒤에서 읽었을 때가 똑같은 문자열
const [N, K] = input[0].split(" ").map(Number);
const Arr = input[1].split(" ").map(Number);

let cnt = 0;
let targetValue = -1;

function merge_sort(p, r) {
  // A[p..r]을 오름차순 정렬한다.
  if (p < r) {
    let q = Math.floor((p + r) / 2); // q는 p, r의 중간 지점
    merge_sort(p, q); // 전반부 정렬
    merge_sort(q + 1, r); // 후반부 정렬
    merge(p, q, r); // 병합
  }
}

// A[p..q]와 A[q+1..r]을 병합하여 A[p..r]을 오름차순 정렬된 상태로 만든다.
// A[p..q]와 A[q+1..r]은 이미 오름차순으로 정렬되어 있다.
function merge(p, q, r) {
  let i = p;
  let j = q + 1;
  let tmp = [];
  while (i <= q && j <= r) {
    if (Arr[i] <= Arr[j]) tmp.push(Arr[i++]);
    else tmp.push(Arr[j++]);
  }
  while (i <= q) tmp.push(Arr[i++]);
  while (j <= r) tmp.push(Arr[j++]);

  let t = 0;
  while (p <= r) {
    cnt++;
    if (cnt === K) targetValue = tmp[t]; // K번째 저장되는 순간 기록
    Arr[p++] = tmp[t++];
  }
}

function solution() {
  merge_sort(0, N - 1);
  console.log(targetValue);
}

solution();
