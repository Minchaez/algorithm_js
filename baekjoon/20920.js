const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);
  const words = input.slice(1);
  const wordMap = new Map();
  for (let i = 0; i < N; i++) {
    if (words[i].length >= M) {
      wordMap.set(words[i], (wordMap.get(words[i]) || 0) + 1);
    }
  }

  const sortedWords = [...wordMap.keys()];

  sortedWords.sort((a, b) => {
    // 자주 나오는 단어일수록 앞에 배치
    // (중요) 리턴을 하면 정렬 결과에 영향을 줌.
    const freqDiff = wordMap.get(b) - wordMap.get(a);
    if (freqDiff !== 0) return freqDiff;
    // 단어의 길이가 길수록 앞에 배치
    const lenDiff = b.length - a.length;
    if (lenDiff !== 0) return lenDiff;
    // 알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치
    return a.localeCompare(b);
  });

  console.log(sortedWords.join("\n"));
}

solution();
