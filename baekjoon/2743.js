const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const stringArr = input.split("");

function solution() {
  console.log(stringArr.length);
}
solution();