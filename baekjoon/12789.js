const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const Numbers = input[1].split(" ").map(Number);

function solution() {
  // 값을 보관할 스택
  const stack = [];
  let nextNumber = 1;
  // Numbers 순회하며 num이 nextNumber와 같을 때, nextNumber++;
  for (let num of Numbers) {
    if (num === nextNumber) {
      nextNumber++;
      // 그게 아니라면 stack에 push
    } else {
      stack.push(num);
    }
    // 계속 반복
    // stack의 길이가 0보다 크고(모든 순회가 아직 끝나지 않은 경우를 뜻함)
    // stack의 마지막 수가 nextNumber와 같음
    // stack.pop하고 nextNumber++;
    while (stack.length > 0 && stack[stack.length - 1] === nextNumber) {
      stack.pop();
      nextNumber++;
    }
  }
  console.log(stack.length === 0 ? "Nice" : "Sad");
}

solution();
