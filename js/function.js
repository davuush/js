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