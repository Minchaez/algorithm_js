const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [Str, N] = input.split(" ");

function solution() {
  const B = Number(N);
  const result = parseInt(Str, B);

  return result;
}
console.log(solution());
