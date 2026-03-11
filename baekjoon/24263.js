const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function solution() {
  console.log(Number(input));
  console.log(1);
}
solution();
