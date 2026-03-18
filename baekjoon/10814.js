const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const Arr = input.slice(1);
// 입력 값을 먼저 나이와 이름으로 분류해서 배열에 저장해야 함.
// [[나이, 이름], [나이, 이름], [나이, 이름]]
function solution() {
  let result = [];
  for (let i = 0; i < N; i++) {
    const [age, name] = Arr[i].split(" ");
    result.push([Number(age), name]);
  }
  result.sort((a, b) => {
    // 나이가 같지 않을 경우, 오름차순 정렬
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return 0;
  });
  console.log(result.map((v) => v.join(" ")).join("\n"));
}
solution();
