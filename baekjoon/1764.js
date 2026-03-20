const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const unheard = input.slice(1, N + 1);
const unseen = input.slice(N + 1);

function solution() {
  let result = [];
  const unheardSet = new Set(unheard);
  for (let i = 0; i < M; i++) {
    if (unheardSet.has(unseen[i])) {
      result.push(unseen[i]);
    }
  }
  console.log(result.length);
  console.log(result.sort().join("\n"));
}

solution();
