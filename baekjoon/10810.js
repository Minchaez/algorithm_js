const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let arr = [];
let result = "";

function solution() {
  const [N, M, ...Numbers] = input;
  for(let i=0; i<N; i++) {
    arr.push(0);
  }

  let start = 0
  for(i = 1; i <= M; i++){
    const end = start + 1;
    const num = start + 2;
    for(let j = Numbers[start]-1; j <= Numbers[end]-1; j++ ) {
      arr[j] = Numbers[num];
    }
    start += 3;    
  }
  for(i = 0; i < arr.length ; i ++ ){
    result += arr[i] + " ";
  }
  console.log(result)
}
solution();