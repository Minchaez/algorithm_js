const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution() {
  let ansX = 0;
  let ansY = 0;
  for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    // XOR 연산
    // 1. 자기 자신과 XOR 하면 0이 된다. A + A = 0
    // 2. 0과 XOR 하면 자기 자신이 된다. A + 0 = A
    // 3. 순서가 바뀌어도 결과는 같다.
    // -> A + B + A = (A + A) + B = 0 + B = B
    ansX ^= x;
    ansY ^= y;
  }
  console.log(ansX, ansY);
}
solution();
