const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function solution() {
  const [Case, ...Numbers] = input;
  const result = "";
  for(i=0; i<Case; i++){
    if(Numbers[i] < Target) {
      result += Numbers[i] + " ";
    }
  }
  console.log(result);
}

solution();