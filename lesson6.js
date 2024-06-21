// throw new Error('стандартний виняток')

// class MyCustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MyCustomError";
//     }
// }

// throw new MyCustomError('Це користувацький виняток');


// Таку функцію можна викликати будь-де 
// function printShow(show1, show2, show3) {
//     const sum = show1 + show2 + show3;
//     return sum;
// }

// console.log(printShow(1, 2, 3));

// // Таку функцію можна викликати тільки після оголошення
// const myFunction = function(param1, param2) {
//     return param1 + param2;
// }

// const result = myFunction(3, 5);
// console.log(result);

// //
// const myArrowFunc = (param1, param2) => {
//     return param1 + param2;
// }

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const John = new Person('John', 30);

const Mykhailo = new Person('Mykhailo', 29);

