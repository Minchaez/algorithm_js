const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function solution() {
  for(let i = 0; i < input.length/2; i++) {
    if(input[i] !== input[input.length-1 - i]) {
      return 0;
    }
  }
  return 1;
}
console.log(solution());