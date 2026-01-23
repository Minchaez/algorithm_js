const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function solution() {
  const [...Numbers] = input;
  const Target = Math.max(...Numbers);
  console.log(Target);
  for(i=0; i<Numbers.length; i++){
    if(Numbers[i] === Target) {
      console.log(i+1);
    }
  }
}

solution();