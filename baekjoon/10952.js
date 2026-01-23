const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function solution() {
  const [...Numbers] = input;
  let result = "";
  for(i=0; i<Numbers.length/2; i++){
    const A = Numbers[i*2]; 
    const B = Numbers[i*2+1]; 
    const sum = A + B;
    if (A === 0 && B ===0 ) {
      break;
    }
    result += sum + "\n";
  }
  console.log(result);
}

solution();