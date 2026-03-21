const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();
console.log(input);
function solution() {
  // 문자열이 있고 그 문자열을 잘라 구성할 수 있는
  // 부분 문자열을 만들기.
  // "서로 다른"이니까 Set 활용 해야 할 것 같음.
  // 이중 루프로 시작(i)부터 끝(j)까지 slice하여 Set에 넣기(중복 자동 제거)
  const result = new Set();
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      const sub = input.slice(i, j);
      result.add(sub);
    }
  }
  console.log(result.size);
}

solution();
