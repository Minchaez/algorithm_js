const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const Arr = input.slice(1);

function solution() {
  let sortedArr = [];
  for (let i = 0; i < N; i++) {
    const [X, Y] = Arr[i].split(" ").map(Number);
    sortedArr.push([X, Y]);
  }
  sortedArr.sort((a, b) => {
    // x 좌표 정렬
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    // x 좌표는 정렬했으니까 y좌표도 정렬
    return a[1] - b[1];
  });

  let result = "";
  sortedArr.forEach((xy) => {
    result += `${xy[0]} ${xy[1]}\n`;
  });
  console.log(result);
}
solution();
