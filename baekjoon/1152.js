const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// .trim()으로 앞 뒤 공백 잘라 다른 테스트 케이스 제거하기
// 빈 문자열일 때를 고려해서 if문으로 따로 빼 처리하기

function solution() {
  if (input === "") {
    console.log(0);
    return;
  } else {
    const sentence = input.split(" ");
    console.log(sentence.length);
  }
}

solution();