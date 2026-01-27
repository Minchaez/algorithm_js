const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

const N = Number(input[0]);
let idx = 1;

function solution() {
  for(i = 0; i < N; i++) {
    const R = Number(input[idx++]); // 1부터 후위 증가
    const S = input[idx++]; // 2부터 시작
    let result = "";
    for(j = 0; j < S.length; j++){
      result += S[j].repeat(R);
    }
    console.log(result);
  }
}

solution();