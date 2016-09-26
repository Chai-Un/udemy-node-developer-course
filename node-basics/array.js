var grades = [100, 50, 75, 97];

console.log(grades[0]);

var grade = grades.pop();

grades.push(79);
console.log(grade);
console.log(grades);

grades.forEach (function (grade) {
    console.log(grade);
});

console.log(grades.length);

var totalGrade = 0

grades.forEach(function (grade) {
    totalGrade += grade;
});
console.log(totalGrade / grades.length);