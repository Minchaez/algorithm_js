const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);
const [N, M, ...Numbers] = input;
let arr = Array.from({ length: N }, (_, index )=> index +1);

function solution() {
  for(i = 0; i < M; i ++) {
    let left = Numbers[2 * i] - 1;
    let right = Numbers[2 * i + 1] - 1;
    // (1 <= left <= right <= N)
    // -> left가 right보다 작을 때, 두 값을 교환한다.
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  console.log(arr.join(" "));
}
solution();