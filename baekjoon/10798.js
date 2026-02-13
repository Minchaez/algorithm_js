const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const matrix = input.map((line) => line.split(""));
function solution() {
  let result = "";
  for (let j = 0; j < 15; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] !== undefined) result += matrix[i][j];
    }
  }
  return result;
}
console.log(solution());
