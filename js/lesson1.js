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


//Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.


function logItems(array){
    // console.log(array);
    for(let i = 0; i < array.length; i += 1){
        console.log(`${i + 1} - ${array[i]}`);
        
    }
}
logItems(['Mango', 'Poly', 'Ajax'])

//Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord){
    // console.log(message);
    // console.log(pricePerWord);
const add = message.split(" ").length
console.log(add);
return `ціна гравіювання з ${add} слів буде складати ${add * pricePerWord} коштів`
}
console.log(calculateEngravingPrice("i love Js and Css", 100));

//Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string){
    // console.log(string);
const longestWord = string.split(" ")
// console.log(longestWord);
let biggestWord = longestWord[0]
for(let i = 0;i < longestWord.length; i += 1){
    // console.log(longestWord[i]);
    if(biggestWord.length < longestWord[i].length){
        biggestWord= longestWord[i]
    }
}
return biggestWord
}
console.log(findLongestWord("Lorem ipsum dolor sit amet consectetur adipisicing elit"));




//Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(string){
    if(string.length <= 40){
        return string
    }else{
        return string.slice(0,41) + "..."
    }
    
}
const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit"
console.log(formatString(message));


// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message){
    const lowerMessage = message.toLowerCase()
// console.log(lowerMessage.includes("span"))
// console.log(lowerMessage.includes("sale"));
return lowerMessage.includes("span") || lowerMessage.includes("sale")
}
const str = "Lorem ipsum dolor Span sit amet consectetur adipisicing elit"
console.log(checkForSpam(str));



// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.


let input;
const numbers = [];



while (true){
    input = prompt("Введіть число")
    if(input === null){
        alert("ви вийшли із циклу")
    break   
    }
    if(isNaN(input)){
        alert("Введіть число")
        continue
    }

    input = Number(input)
    numbers.push(input)
    

}
    if(numbers.length > 0){
        let total = 0;
        for (let i = 0; i < numbers.length; i+=1){
            total += numbers[i]
        }
        console.log(`Загальна сума чисел дорівнює ${tota}`);
        
    }
