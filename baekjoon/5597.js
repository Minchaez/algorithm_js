const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);
// 우선 배열을 정렬하고 1~30까지 순회하는 for문과 인덱스의 요소를 비교하면서
// 결과 배열을 만들어 삽입하기
const result = [];
function solution() {
  sortedInput = input.sort((a, b) => a - b);
  currentIndex = 0
  for(i = 1; i<= 30; i++) {
    if(sortedInput[currentIndex] === i){
      currentIndex++;
    } else {
      result.push(i);
    }
  }
  console.log(result.sort((a, b) => a- b).join("\n"));

}
solution();