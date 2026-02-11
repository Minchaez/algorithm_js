const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const upper = input.toUpperCase().split("");
const uniqueArr = new Set([...upper]);

let result = [];
function solution() {
  for(const spell of uniqueArr) {
    let count = 0;
    for(let i = 0; i < upper.length; i++) {
      if(spell === upper[i]) {
        count += 1;
      }
    }
    result.push(count);
  }
  const maxCount = Math.max(...result);
  let resultCount = 0;
  let maxIndex;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === maxCount) {
      resultCount++;
      maxIndex = i;
    }
  }
  if (resultCount > 1) {
    return "?";
  } else {
    const chars = [...uniqueArr];
    return chars[maxIndex];
  }
}
console.log(solution());