const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");
function solution() {
  let A = Number(input[0].split("").reverse().join(""));
  let B = Number(input[1].split("").reverse().join(""));
  if ( A < B ) {
    console.log(B);
  } else {
    console.log(A);
  }
  ;
}

solution();