const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// function solution() {
const butterfly = [
    "         ,r'\"7",
    "r`-_   ,'  ,/",
    " \\. \". L_r'",
    "   `~\\/",
    "      |",
    "      |"
];

console.log(butterfly.join('\n'));
// }

// solution();