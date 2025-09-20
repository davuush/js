// // const add = (a , b) => a + b;
//  const add = (a,b) => {
//     // const c = a + b 
//     return a + b
//  }




// console.log(add(1,3 ));
// const logPassword = (text) => console.log(text);


// logPassword('qwerty123')


// const fn = function () {
//     console.log(arguments);
    
// }
// fn(1,2,3,4,5,6,7,8)

// const fs = (...args)  => {
//     console.log(args);
    
// }
// fs(1,2,3,4,5,6,7,8)

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// const logItems = array => {
//     // console.log(array);
//     for(let i = 0; i < array.length;i += 1){
//         console.log(`${i + 1} = ${array[i]}`);
        
//     }
// }
// logItems(['Mango', 'Poly', 'Ajax'])

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// const calculateEngravingPrice = (message, pricePerWord) => {
//     // console.log(message);
//     // console.log(pricePerWord);
// const string = message.split(" ")
// const result = string.length * pricePerWord
// console.log(string);

// }
// calculateEngravingPrice('Напиши скрипт підрахунку вартості гравіювання прикрас', 10)



// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.


// const findLongestWord = string => {
// const longestWord =  string.split(" ")
//     let word = longestWord[0]
//     for(let i = 0;i < longestWord.length; i += 1){
//         if(word.length < longestWord[i].length){
//             word = longestWord[i]
//         }
        
//     }

//     console.log(word);
    
// }
// findLongestWord("яка приймає параметром довільний рядок")


// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];



// function countItems(array, condition){
// let count = 0;

// for(const element of array ){
// if (condition(element)){
//     count += 1;
// }
// }
// return count

// }



// // Умови для перевірки:
// const isEven = num => num % 2 === 0;
// const isLarge = num => num > 10;
// const isShort = word => word.length <= 3;

// // Тестування
// console.log('Парних чисел:', countItems(numbers, isEven));
// console.log('Чисел більше 10:', countItems(numbers, isLarge));
// console.log('Коротких слів:', countItems(words, isShort));




// const calculate = (a, b, operation) =>{
    


// return operation(a, b)
// }

// const add = (a , b) => a + b

// const subtract = (a , b) => a - b

// const multiply = (a, b) => a * b

// const divide = (a,b) => {
//     if (b === 0 ){
//         return "Помилка ділення на 0 неможливе"
//     }
//     return a / b
// }

// // Тестування
// console.log(calculate(10, 5, add));      // Повинно показати 15
// console.log(calculate(10, 5, subtract)); // Повинно показати 5
// console.log(calculate(10, 5, multiply)); // Повинно показати 50
// console.log(calculate(10, 5, divide));   // Повинно показати 2
// console.log(calculate(10, 0, divide));   // Повинно показати помилку




// function repeatMessage(times, messageCreator){
//     for(let i = 0; i < times ; i+=1){
//        console.log(messageCreator);

        
//     }
// }


// const prizePlaces = i = ` призових місць є ${i + 1}`

// repeatMessage(4, prizePlaces)


