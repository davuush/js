// const logginFor = (callback) => {   //функція вищого порядку яка приймає іншу функцію колбек
//     callback()
// }
// function fm(){                       //функція колбек 
//     console.log("Hello world!");
    
// }
// logginFor(fm)                          //виклик функції вищого порядку в якості аргументу передаємо іншу функцію



// const calculator = (callback, a , b) => {
    
//     return callback(a , b)
// }
// const add = (a , b) => a + b

// const minus = (a , b) => a - b

// const multiply = (a, b) => a * b

// const devide = (a,b) => a / b




// console.log(calculator(add , 1,7));

// console.log(calculator(minus, 9 , 3));

// console.log(calculator(multiply, 7 , 19));

// console.log(calculator(devide, 169 , 13));



 //Колбек: найкорочше слово у масіві

// const processArray = (callback, array) =>{
//     return callback(array)
// }

// const searchWord = (array) =>{
//     const newArray = array.split(" ");
//     const shortestWord = ""
//     for (const word of newArray){
//         if(word.length < newArray){
//             shortestWord = word
//         }
//     }
//     return shortestWord
// }
// console.log(processArray(searchWord,["Колбек:" ,"найкорочше", "слово", "у", "масіві"]));


// Колбек: сума всіх елементів

// function processArray(array,callback){
//     return callback(array)
// }
// function sumArray(arr){
//     let sum = 0
//     for (const num of arr){
//         sum += num
//     }
//     return sum
// }
// console.log(processArray());





// const fn = (callback , array) => {
//     return callback(array)
// }

// const callback = (array) => {
//     let min = array[0]
//     for (let i = 0; i < array.length ; i += 1){
//         // console.log(typeof array[i]);
//         if (typeof (array[i]) === "string"){
//             continue

//         } else if (array[i] < min){
//             min = array[i]

//         }
        
//     }   
// return min
// }





// const arr2 = [1 , 'blue' , 11, "clown", 69] 
// const arr = [10, "2" , 3 , "red" , 7]
// console.log(fn(callback, arr));
// console.log(fn(callback, arr2));


// Створіть функцію, яка рахує, скільки елементів масиву відповідають певній умові, використовуючи колбек-функцію для перевірки.

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];


function countItems(array, condition) {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count += 1;
    }
  }
  return count;
}


const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;


console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));





// Створіть універсальний калькулятор, який може виконувати різні математичні операції залежно від переданої колбек-функції.


// Функція calculate тут
const calculate = (a, b, operation) => operation(a,b)

// Стрілкові функції для операцій тут
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) =>{

    if( b === 0){
        console.log("Помилка");
        
    }
    return  a / b;
}


// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку


//Створіть функцію, яка повторює певну дію задану кількість разів, використовуючи колбек-функцію для генерації повідомлень.




function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    console.log(messageCreator(i));
  }
}


const daysMessage = i => `у тижні ${i + 1} днів`;
const squareMessage = i => `Квадрат числа ${i} = ${i * i}`;


repeatMessage(7, daysMessage);


repeatMessage(2, squareMessage);


