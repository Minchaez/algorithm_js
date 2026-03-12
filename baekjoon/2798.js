const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

function solution() {
  let maxSum = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const currentSum = nums[i] + nums[j] + nums[k];
        if (currentSum <= M && currentSum > maxSum) {
          maxSum = currentSum;
        }
        if (maxSum === M) break;
      }
      if (maxSum === M) break;
    }
    if (maxSum === M) break;
  }
  console.log(maxSum);
}
solution();
