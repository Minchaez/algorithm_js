const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

// 매핑용 크로아티아 알파벳 표 하나 만들기
const MappedArr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution() {
  // 원본 문자열에서 표에 있는 문자 찾고, 있으면 * 이런 문자로 바꿔버리기
  // -> 나중에 결과에 arr.length 해주면 결과값 되겠지?
  for (let alphabet of MappedArr) {
    // alphabet에 해당하는 문자열 잘라버리고 그 자리 "*" 로 붙여버리기
    input = input.split(alphabet).join("*");
  }
  // 모든 크로아티아 알파벳 변환이 수행된 배열의 길이 출력
  return input.length;
}
console.log(solution());