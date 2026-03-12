const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);
function solution() {
  for (let i = 1; i < N; i++) {
    const sum = i
      .toString()
      .split("")
      .reduce((acc, current) => acc + Number(current), 0);

    if (i + sum === N) {
      return i;
    }
  }
  return 0;
}
console.log(solution());
