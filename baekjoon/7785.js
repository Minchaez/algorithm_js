const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const Log = input.slice(1);

function solution() {
  // 현재 회사에 있는 사람들의 이름 저장하는 공간
  const people = new Set();

  for (let i = 0; i < N; i++) {
    const [name, status] = Log[i].split(" ");

    if (status === "enter") {
      people.add(name);
    } else if (status === "leave") {
      people.delete(name);
    }
  }
  console.log([...people].sort().reverse().join("\n"));
}

solution();
