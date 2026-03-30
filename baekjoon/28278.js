const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const stack = [];
const ans = [];

function solution() {
  for (let i = 1; i <= N; i++) {
    const line = input[i].split(" ");
    const cmd = Number(line[0]);

    switch (cmd) {
      case 1:
        stack.push(Number(line[1]));
        break;
      case 2:
        ans.push(stack.length > 0 ? stack.pop() : -1);
        break;
      case 3:
        ans.push(stack.length);
        break;
      case 4:
        ans.push(stack.length === 0 ? 1 : 0);
        break;
      case 5:
        ans.push(stack.length > 0 ? stack[stack.length - 1] : -1);
        break;
    }
  }
  console.log(ans.join("\n"));
}

solution();
