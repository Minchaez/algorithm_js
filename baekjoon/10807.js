const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function solution() {
  const [Case, ...Numbers] = input;
  const Target = Numbers.pop(-1);
  let cnt = 0;
  for(i=0; i<Case; i++){
    if(Numbers[i] === Target) {
      cnt += 1;
    }
  }
  console.log(cnt);
}

solution();