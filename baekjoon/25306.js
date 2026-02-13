const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let sum = 0;
let sumOfSubjectRate = 0;
function solution() {
  for (let i = 0; i < input.length; i++) {
    const [title, subjectRate, grade] = input[i].split(" ");
    if (grade === "P") {
      continue;
    } else {
      sumOfSubjectRate += Number(subjectRate);
    }
    switch (grade) {
      // 등급이 P인 과목은 계산에서 제외
      case "P":
        break;
      case "A+":
        sum += subjectRate * 4.5;
        break;
      case "A0":
        sum += subjectRate * 4;
        break;
      case "B+":
        sum += subjectRate * 3.5;
        break;
      case "B0":
        sum += subjectRate * 3;
        break;
      case "C+":
        sum += subjectRate * 2.5;
        break;
      case "C0":
        sum += subjectRate * 2;
        break;
      case "D+":
        sum += subjectRate * 1.5;
        break;
      case "D0":
        sum += subjectRate * 1;
        break;
      case "F":
        sum += subjectRate * 0;
        break;
    }
  }
  const result = sum / sumOfSubjectRate;
  console.log(result);
}
solution();

// 더 좋은 풀이........
// 등급별 점수 매핑 (객체 활용)
const gradeTable = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

function solution2() {
  let totalScore = 0; // (학점 * 과목평점)의 총합
  let totalCredits = 0; // 학점의 총합

  for (let line of input) {
    const [title, credit, grade] = line.split(" ");

    // P등급은 계산에서 완전히 제외
    if (grade === "P") continue;

    const numCredit = Number(credit); // 학점을 숫자로 변환
    totalScore += numCredit * gradeTable[grade];
    totalCredits += numCredit;
  }

  // 최종 결과 출력 (전공평점 = 총점 / 총학점)
  console.log(totalScore / totalCredits);
}

solution2();
