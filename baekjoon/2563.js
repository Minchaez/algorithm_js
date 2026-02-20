const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const grid = Array.from(Array(100), () => Array(100).fill(0));

const [N, ...arr] = input;

function solution() {
  let count = 0;
  for (let i = 0; i < N; i++) {
    let [startX, startY] = arr[i].split(" ").map(Number);
    for (let X = startX; X < startX + 10; X++) {
      for (let Y = startY; Y < startY + 10; Y++) {
        if (grid[X][Y] === 0) {
          grid[X][Y] = 1;
          count++;
        }
      }
    }
  }
  return count;
}
console.log(solution());
