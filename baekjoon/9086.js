const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const arr = input.split("\n");
const [N, ...Strings] = arr;
// function solution() {
//   for(let i = 0; i < N; i++ ) {
//     const first = Strings[i][0];
//     const last = Strings[i][Strings[i].length-1];
//     console.log(`${first}${last}`);
//   }
// }

// 개선(최신)버전?
function solution() {
  for(const word of Strings) {
    const first = word.at(0);
    const last = word.at(-1);

    console.log(`${first}${last}`);
  }
}

solution();