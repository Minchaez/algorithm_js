const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const [N, Numbers] = input.split("\n");

function solution() {
  const sum = Numbers.split("").reduce((acc, current) => 
    acc + Number(current), 0);
  console.log(sum);
}
solution();