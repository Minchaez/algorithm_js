const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// 큰 값을 사용할 때는 BigInt 사용하기
const input = BigInt(require("fs").readFileSync(filePath).toString().trim());

function solution() {
  const result = input * input * input;
  // BigInt에는 맨 마지막에 BigInt임을 알리기 위해 n이 붙음(그래도 숫자임)
  // 따라서 이 n을 없애기 위해 문자열로 바꿔줌
  // 문자열로 바꿨을 때 왜 n이 사라지냐?
  // -> BigInt의 끝에 붙는 n은 BigInt라는 사실을 알리는 요소기에
  // BigInt가 아닌 문자열로 바꿔버리면 n이 사라진다.
  console.log(result.toString());
  console.log(3);
}
solution();
