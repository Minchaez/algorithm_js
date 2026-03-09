const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [num1, num2, num3] = input;

function solution() {
  if (num1 + num2 + num3 === 180) {
    if (num1 === num2 && num1 === num3) {
      return "Equilateral";
    } else if (num1 === num2 || num2 === num3 || num1 === num3) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  } else {
    return "Error";
  }
}
console.log(solution());
