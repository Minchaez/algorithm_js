const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const Arr = input[1].split(" ").map(Number);
// 약수들 중에서 가장 큰 수를 2배, 3배 증가시켜 가면서 모든 약수를 순회시키고
// 그 수들이 모두 나눠질 때 그 수를 리턴하면 되는 거지. -> 실패(22퍼센트 정도에서)
// 반례 (3, 9) 의도한 N은 27이지만 18로도 3과 9는 모두 나눠지기에 18출력
// -> 이걸 해결하기 위해선 곱한 수의 약수를 모두 구하고 비교해보는 로직이 또 필요한데,
// 이걸 의도했을 거라고 생각하진 않았음.

// 찾아보니, 약수는 대칭성을 띄기 때문에
// 서로 대칭되는 위치인 수를 곱했을 때 N이 된다는 것을 확인.
// ex) 1과 N, 1 이상인 약수와 N보다 하나 작은 약수를 곱했을 때 등등...

// 즉 간단한 풀이 완성

function solution() {
  console.log(Math.min(...Arr) * Math.max(...Arr));
}

solution();
