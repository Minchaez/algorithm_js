const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 팰린드롬: 앞에서 읽었을 때랑 뒤에서 읽었을 때가 똑같은 문자열
const N = Number(input[0]);
const Strings = input.slice(1);

let cnt = 0;

function recursion(s, l, r) {
  cnt++;
  if (l >= r) {
    return 1;
  } else if (s[l] !== s[r]) {
    return 0;
  } else {
    return recursion(s, l + 1, r - 1);
  }
}

function isPalindrome(s) {
  cnt = 0;
  return recursion(s, 0, s.length - 1);
}

function solution() {
  for (let i = 0; i < N; i++) {
    console.log(isPalindrome(Strings[i]), cnt);
  }
}

solution();
