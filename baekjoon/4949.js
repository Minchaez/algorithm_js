const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let ans = [];
function solution() {
  // 괄호를 보관하는 stack이 하나 있어야 함.
  // 문자열이 균형을 이루고 있는지 판단하는 상태도 있어야 함.
  for (let i = 0; i < input.length; i++) {
    // 종료 조건
    if (input[i] === ".") break;

    let isValid = true;
    const stack = [];

    for (const str of input[i]) {
      if (str === "(" || str === "[") {
        stack.push(str);
      } else if (str === ")") {
        if (stack.pop() !== "(") {
          isValid = false;
          break;
        }
      } else if (str === "]") {
        if (stack.pop() !== "[") {
          isValid = false;
          break;
        }
      }
    }
    ans.push(isValid && stack.length === 0 ? "yes" : "no");
  }
  console.log(ans.join("\n"));
}

solution();
