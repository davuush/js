// //function declaration
// function add(x,y){//x,y - список параметрыв
//     console.log(`x: ${x}; y: ${y}`);
    
//     const result = x + y
//     // console.log(result);
//     return result //return -повертає значення
// }
// console.log(add(5,12));// 5 ,12 - список аргуменів
// // console.log(add(4,7))
// // console.log(add(25,47))

// //function expresion
// const minus = function(x,y){
//     console.log(`x: ${x}; y: ${y}`);
//     return x - y 
// }
// console.log(minus(15,3));

// const multiply = (x,y)=>{
//     console.log(`x: ${x}; y: ${y}`);
//     return x * y
// }
// console.log(multiply(5,7));






// const res = minus(3 ,17)
// console.log(res);


// function logMessage(name){
//     return `${name} Дякуб за підписку`
// }
// console.log(logMessage("Ігор"));


// const withdraw = function(amount, balance) {
//     if (amount === 0) {
//       console.log('Для проведення операції введіть суму більше нуля.');
//     } else if (amount > balance) {
//       console.log('Недостатньо коштів на рахунку.');
//     } else {
//       console.log('Операція зняття коштів проведена.');
//     }
//   }; 
//   withdraw(0, 300); // Для проведення операції введіть суму більше нуля.
//   withdraw(500, 300); // Недостатньо коштів на рахунку.
//   withdraw(100, 300);


//   function psevdoArgs(){
//     console.log(arguments);
    
//     const args= Array.from(arguments)
//     console.log(args);
    
//   }
//   console.log(psevdoArgs(1,2,3,4,5));


//  function psevdoArgs(...args){
// console.log(args);
// for(let index = 0; index < args.length; index += 1 ){
//     const element = args[index]+= 100;
//     console.log(element);
    
// }

//  }
//  console.log(psevdoArgs(1,2,3,4,5));




//  function fn(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//  }
//  console.log(fn([1,2,3],"джигу",100));
 


// Наша функція має приймати два параметри імя та вік та має виводити рядок 'привіт мене звати .. мій вік ...'

// function infoUsers(name, age ){
//     return `привіт мене звати ${name} мій вік ${age}`

    
// }

// console.log(infoUsers('Давид', 13));
// console.log(infoUsers('Петрик', 73));
// console.log(infoUsers('Володимир', 15));
// console.log(infoUsers('Матвій', 49));

// console.log(infoUsers);


// напиши фунцію яка буде приймати один параметр рядок а повертати рядок у нижньому регістрі і довжиною не більше 30 символів , якзл більще 30 символів в кінець рядка додавати три крапки

// function convertedMessage(string){
//     const lowerText = string.toLowerCase()
//         console.log(lowerText.length);

//     if(lowerText.length <= 30 ){
//         return lowerText
//     }else{
//         return lowerText.slice(0,31) + "..."
//     }




// }
// const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique velit iusto ea quasi labore eligendi expedita quam necessitatibus, commodi atque ratione. Voluptatibus suscipit voluptates dolor laboriosam maiores, alias maxime harum!"
// const message2 = "Метод slice не змінює вихідний масив, а повертає новий масив, що містить копію елементів вихідного."
// console.log(convertedMessage(message));
// console.log(convertedMessage(message2));


// напиши функцію яка буде приймати масив чисел і повертати середнє арефметичне

// function numberList(array) {
//     // console.log(array);
//     let sum = 0
//     for(let number = 0; number < array.length; number +=1){
//         sum+=array[number]
//     }
//     const result = sum / array.length
//     // return Math.round(result)
//     return Number(result.toFixed(3))
// }
// console.log(numberList([3,5,7,34,51,1]));
// console.log(numberList([3,5,7,34,51,1]));
// console.log(numberList([3,5,7,34,51,1]));


// function sumNumbers(...arg) {
//     let sum = 0
//     for(let i = 0; i < arg.length ; i += 1){
//         sum+=arg[i]
//             console.log(arg[i]);
//     }
//     return sum
// }

// console.log(sumNumbers(1,2,3));
// console.log(sumNumbers(1,2,3,4,5));
// console.log(sumNumbers(1,2,3,4,5,6,7));
// function logItems(array){
// const numbering = ['Mango', 'Poly', 'Ajax'];
// let value = Number(prompt("Введіть значення від 1 до 3"));
// for (let i = 0;i < array.length; i += 1){
//     console.log(array[i]);
    
// }if( value === 1){
//     console.log(numbering[1]);
    
// }
// }

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} ${array[i]}`);

//   }
// }


// logItems(['Mango', 'Poly', 'Ajax']);
//Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.


// function logItems(array){
//     // console.log(array);
//     for(let i = 0; i < array.length; i += 1){
//         console.log(`${i + 1} - ${array[i]}`);
        
//     }
// }
// logItems(['Mango', 'Poly', 'Ajax'])

// //Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord){
//     // console.log(message);
//     // console.log(pricePerWord);
// const add = message.split(" ").length
// console.log(add);
// return `ціна гравіювання з ${add} слів буде складати ${add * pricePerWord} коштів`
// }
// console.log(calculateEngravingPrice("i love Js and Css", 100));

// //Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// function findLongestWord(string){
//     // console.log(string);
// const longestWord = string.split(" ")
// // console.log(longestWord);
// let biggestWord = longestWord[0]
// for(let i = 0;i < longestWord.length; i += 1){
//     // console.log(longestWord[i]);
//     if(biggestWord.length < longestWord[i].length){
//         biggestWord= longestWord[i]
//     }
// }
// return biggestWord
// }
// console.log(findLongestWord("Lorem ipsum dolor sit amet consectetur adipisicing elit"));




// //Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

// function formatString(string){
//     if(string.length <= 40){
//         return string
//     }else{
//         return string.slice(0,41) + "..."
//     }
    
// }
// const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit"
// console.log(formatString(message));


// // Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

// function checkForSpam(message){
//     const lowerMessage = message.toLowerCase()
// // console.log(lowerMessage.includes("span"))
// // console.log(lowerMessage.includes("sale"));
// return lowerMessage.includes("span") || lowerMessage.includes("sale")
// }
// const str = "Lorem ipsum dolor Span sit amet consectetur adipisicing elit"
// console.log(checkForSpam(str));



// // Напиши скрипт з наступним функціоналом:

// // При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// // Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// // Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// // 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.


// let input;
// const numbers = [];



// while (true){
//     input = prompt("Введіть число")
//     if(input === null){
//         alert("ви вийшли із циклу")
//     break   
//     }
//     if(isNaN(input)){
//         alert("Введіть число")
//         continue
//     }

//     input = Number(input)
//     numbers.push(input)
    

// }
//     if(numbers.length > 0){
//         let total = 0;
//         for (let i = 0; i < numbers.length; i+=1){
//             total += numbers[i]
//         }
//         console.log(`Загальна сума чисел дорівнює ${tota}`);
        
//     }
