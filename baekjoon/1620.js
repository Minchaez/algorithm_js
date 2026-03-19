const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const pokemonList = input.slice(1, N + 1);
const questionList = input.slice(N + 1);

function solution() {
  // 객체 생성
  const dict = {};

  pokemonList.forEach((name, idx) => {
    // id 값으로 0은 될 수 없으니까
    const id = idx + 1;

    // 이름이 들어오면 id
    // id가 들어오면 이름을 뱉어야 하기에 양방향 객체로 만들어줘야함.
    dict[name] = id;
    dict[id] = name;
  });

  // 질문에 대한 답 출력
  const result = questionList.map((q) => {
    return dict[q];
  });
  console.log(result.join("\n"));
}

solution();
