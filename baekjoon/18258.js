const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const commands = input.slice(1);

const queue = [];
// 포인터 활용
let head = 0;

function solution() {
  const ans = [];
  for (let i = 0; i < N; i++) {
    const [cmd, x] = commands[i].split(" ");
    const X = Number(x);

    switch (cmd) {
      case "push":
        queue.push(X);
        break;
      case "pop":
        if (queue.length === head) {
          ans.push(-1);
        } else {
          ans.push(queue[head]);
          head++;
        }
        break;
      case "size":
        ans.push(queue.length - head);
        break;
      case "empty":
        ans.push(queue.length === head ? 1 : 0);
        break;
      case "front":
        ans.push(queue.length === head ? -1 : queue[head]);
        break;
      case "back":
        ans.push(queue.length === head ? -1 : queue[queue.length - 1]);
        break;
    }
  }
  console.log(ans.join("\n"));
}

solution();
