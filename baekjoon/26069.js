const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const Histories = input.slice(1);

// 무지개 댄스를 추지 않고 있던 사람이
// 무지개 댄스를 추고 있던 사람을 만나게 된다면,
// 만난 시점 이후로 무지개 댄스를 추게 된다.

// 기록이 시작되기 이전에 무지개 댄스를 추고 있는 사람은 총총이 뿐

// ChongChong이랑 만난 사람들은 무지개 댄스를 추기 시작하고
// 그 사람들이랑 만난 사람들은 또 무지개 댄스를 추기 시작한다.
// 입력은 대소문자를 구분한다.

// 풀이 아이디어
// 1. 명단을 순회하면서 Set객체에서 has 메서드 사용해서 하나라도 있는 경우 둘 다 add
// 해당 방법으로 모든 인원 Histories 순회하면 될 듯?

const people = new Set();
people.add("ChongChong");
let num = 1;

function solution() {
  for (let i = 0; i < N; i++) {
    const [A, B] = Histories[i].split(" ");
    // 둘 중에 하나라도 춤추는 사람이 있을 때,
    if (people.has(A) || people.has(B)) {
      people.add(A);
      people.add(B);
    } else {
      // 둘 다 춤추고 있지 않을 때
      continue;
    }
  }
  console.log(people.size);
}

solution();
