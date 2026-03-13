const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

// 설탕 무게
const N = Number(input);

function solution() {
  let maxFive = Math.floor(N / 5);
  for (let i = maxFive; i >= 0; i--) {
    let remainSugar = N - i * 5;

    if (remainSugar % 3 === 0) {
      return i + remainSugar / 3;
    }
  }
  return -1;
}
console.log(solution());
