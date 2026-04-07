const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const Histories = input.slice(1);

const people = new Set();

let num = 0;

function solution() {
  for (let i = 0; i < N; i++) {
    if (Histories[i] === "ENTER") {
      // set 객체 초기화
      people.clear();
      continue;
    } else {
      // 처음이거나 나갔다가 다시 들어온 사람이 처음 말하는 경우
      // (set객체가 가지고 있지 않을 때)
      if (!people.has(Histories[i])) {
        people.add(Histories[i]);
        num++;
      } else {
        // 가지고 있을 때
        continue;
      }
    }
  }
  console.log(num);
}

solution();
