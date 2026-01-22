const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function solution() {
  const [Total, TestCase, ...numbers] = input;
  let result = 0;
  for(i = 0; i < TestCase; i++) {
    const price = parseInt(numbers[i*2])
    const num = parseInt(numbers[i*2+1])
    const sum = price * num;
    result += sum;
  }
  if(Total === result) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

solution();
