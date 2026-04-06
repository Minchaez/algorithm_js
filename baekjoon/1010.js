const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function fac(num) {
  let result = BigInt(1);
  for (let i = 1; i <= num; i++) {
    result *= BigInt(i);
  }
  return result;
}

function solution() {
  // 강 서쪽 N, 강 동쪽 M개의 사이트 존재
  //
  const T = Number(input[0]);
  let ans = [];

  for (let i = 1; i <= T; i++) {
    const [N, M] = input[i].split(" ").map(Number);

    ans.push(fac(M) / (fac(N) * fac(M - N)));
  }

  console.log(ans.join("\n"));
}

solution();
