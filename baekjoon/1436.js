const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const N = Number(input);

function solution() {
  let cnt = 0;
  let number = 0;
  while (cnt < input) {
    // number에 "666"이 있는 경우 N++
    number++;
    if (String(number).includes("666")) {
      cnt++;
    }
  }
  // N이 input과 같아지는 순간이 오면 console.log(number)
  console.log(number);
}
solution();
