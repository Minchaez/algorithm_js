const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, ...strArr] = input;

let cnt = 0;

function solution() {
  for (let i = 0; i < n; i++) {
    const word = strArr[i];
    const seen = new Set();
    let isGroupWord = true;

    for (let j = 0; j < word.length; j++) {
      if (word[j] !== word[j - 1]) {
        if (seen.has(word[j])) {
          isGroupWord = false;
          break; // 해당 반복문(j) 빠져나가고 다음 반복(i+1)로 감.
        }
        seen.add(word[j]);
      }
    }
    if (isGroupWord) cnt++;
  }
  return cnt;
}
console.log(solution());
