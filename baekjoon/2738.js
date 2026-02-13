const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const allData = input.slice(1).map((line) => line.split(" ").map(Number));

const matrixA = allData.slice(0, N);
const matrixB = allData.slice(N);

function solution() {
  for (let i = 0; i < N; i++) {
    let result = "";
    for (let j = 0; j < M; j++) {
      result += matrixA[i][j] + matrixB[i][j] + " ";
    }
    console.log(result);
  }
}
solution();
