const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = BigInt(require("fs").readFileSync(filePath).toString().trim());

function solution() {
  const sum = (input * (input - 1n) * (input - 2n)) / 6n;
  console.log(sum.toString());
  console.log(3);
}
solution();
