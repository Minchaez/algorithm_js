const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const ans = [];

function solution() {
  for (let i = 1; i <= N; i++) {
    // 각 줄마다 스택 및 상태 초기화
    const stack = [];
    const parentheses = input[i].trim().split("");
    let isValid = true;
    for (let parenthesis of parentheses) {
      // 무조건 NO인 경우
      if (stack.length === 0 && parenthesis === ")") {
        isValid = false;
        break;
        // 괄호 열은 경우
      } else if (parenthesis === "(") {
        stack.push(parenthesis);
        // 괄호 닫은 경우(이미 괄호 열은 게 있을 때)
      } else {
        stack.pop();
      }
    }
    // stack의 결과를 가지고 YES/NO 판단
    if (stack.length === 0 && isValid) {
      ans.push("YES");
    } else {
      ans.push("NO");
    }
  }
  console.log(ans.join("\n"));
}

solution();
