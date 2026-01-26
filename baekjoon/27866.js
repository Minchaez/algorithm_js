const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/);

const index = Number(input.slice(-1));

console.log(typeof index);


const stringArr = input.map(word => word.split(""));
console.log(stringArr);

function solution() {
  console.log(stringArr[0][index-1]);
}
solution();