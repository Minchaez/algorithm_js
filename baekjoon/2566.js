const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const matrix = input.map((line) => line.split(" ").map(Number));
function solution() {
  let max = -1;
  let colIdx = 0;
  let rowIdx = 0;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
        rowIdx = i + 1;
        colIdx = j + 1;
      }
    }
  }
  console.log(max);
  console.log(`${rowIdx} ${colIdx}`);
}
solution();
