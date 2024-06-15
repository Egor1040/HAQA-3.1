let averageGrade = 71;
let message;

switch (true) {
    case averageGrade >= 91:
        message = 'Відмінно';
        break;
    case averageGrade >= 81:
        message = 'Дуже добре';
        break;
    case averageGrade >= 71:
        message = 'Добре';
        break;
    case averageGrade >= 60:
        message = 'Задовільно';
        break;
    default:
        message = 'Незадовільно';
}

console.log(message);
