const { time } = require("console");

const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B, V] = input;

function solution() {
  // 마지막날은 미끄러지지 않기 때문에 B를 미리 빼고(V-B)
  // V-B에서 하루에 올라가는 거리 A-B를 나눈 뒤, 만약 소수점이 나오면
  // 다음 날 더 올라가야 한다는 말이니
  // 올림 처리 해주기

  const result = Math.ceil((V - B) / (A - B));
  return result;
}
console.log(solution());
