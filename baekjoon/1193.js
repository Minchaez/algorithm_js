const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();
let n = Number(input);
function solution() {
  let layer = 1;
  if (n === 1) return "1/1";

  while (layer < n) {
    n -= layer;
    layer++;
  }
  if (layer % 2 === 0) {
    return `${n}/${layer - n + 1}`;
  } else {
    return `${layer - n + 1}/${n}`;
  }
}
console.log(solution());
