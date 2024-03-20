export function getNumberOfGrades(grades: number[]): number {
  let gradesAmount = 0;
  grades.forEach(() => {
    gradesAmount++;
  });
  return gradesAmount;
}

export function getSumGrades(grades: number[]): number {
  let gradesSum = 0;
  grades.forEach((grade) => {
    gradesSum += grade;
  });
  return gradesSum;
}

export function getAverageValue(grades: number[]): number {
  let gradesAverage = 0;
  let gradesAmount = 0;
  grades.forEach((grade) => {
    gradesAmount++;
    gradesAverage += grade;
  });
  return gradesAverage / gradesAmount;
}

export function getPassingGrades(grades: number[]): number[] {
  const passingGrades: number[] = [];
  grades.forEach((grade) => {
    if (grade >= 10) {
      passingGrades.push(grade);
    }
  });
  return passingGrades;
}

export function getFailingGrades(grades: number[]): number[] {
  const failingGrades: number[] = [];
  grades.forEach((grade) => {
    if (grade < 10) {
      failingGrades.push(grade);
    }
  });
  return failingGrades;
}

export function getRaisedGrades(grades: number[]): number[] {
  const raisedGrades: number[] = [];
  grades.forEach((grade) => {
    if (grade < 20) {
      grade++;
    }
    raisedGrades.push(grade);
  });
  return raisedGrades;
}
