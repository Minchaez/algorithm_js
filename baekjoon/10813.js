const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let arr = [];
let result = "";

function solution() {
  const [N, M, ...Numbers] = input;
  for(let i=1; i<=N; i++) {
    arr.push(i);
  }

  for(i = 0; i < M; i++){
    let start = Numbers[i*2]-1;
    let end = Numbers[i*2 + 1]-1;
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }
  console.log(arr.join(" "))
}
solution();