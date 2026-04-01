const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// 2164 카드2
// N이 제공되고 내림차순으로 정렬되어 있음(제일 위가 가장 작은 수라니까)

function solution() {
  const N = Number(input);
  const Arr = Array.from({ length: N }, (_, i) => i + 1);
  // 포인터 활용
  let head = 0;

  // 종료조건
  // 수가 하나 남았을 때
  // Arr.length에서 head(포인터)만큼 뺐을 떄, 1보다 클 경우 반복
  // 아직 수가 2개 이상 남았다는 뜻이기에
  while (Arr.length - head > 1) {
    // 처음 수를 버림(head++) - 234
    head++;

    // 그 뒤 Arr[head]를 push - 2342
    Arr.push(Arr[head]);

    // 그 뒤 head++ - 342
    head++;

    // 이거 반복
  }
  console.log(Arr[head]);
}

solution();
