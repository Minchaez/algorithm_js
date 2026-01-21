const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution() {
  console.log("|\\_/|");
  console.log("|q p|   /}");
  console.log('( 0 )"""\\ ');
  console.log('|"^"`    |');
  console.log("||_/=\\\\__|");
}

solution();
