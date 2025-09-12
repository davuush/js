// // let,cont,var
// const firstName = "David";
// console.log(firstName);
// let lastName;

// lastName = "Usharuk"
// console.log(lastName);  


// // 7 премітивних видів данних   string   number   bigint   boolean   symbol   null   underfined
// const name = "beep";
// console.log(typeof(name));

// const age = 7;
// console.log(typeof(age));

// console.log(10>12);
// console.log(typeof(10>12));
// console.log(typeof(%));

// const message = "Я ВИчаю ДЖавА скРІпт";
// console.log(message.length);


// let number = "21";
// console.log(number);


// const upperMessage = message.toUpperCase();
// console.log(upperMessage);


// const lowerMessage = message.toLowerCase();
// console.log(lowerMessage);


// alert(message);


// const result = confirm("чи виповнилося вам 18 років?")
// const age = 13;
// console.log(age);


// const name = "Давид";
// console.log(name);


// const isStudent = true;
// console.log(isStudent);


// const myString = "У будь-якому процесі важлива не швидкість, а задоволення";
// console.log(myString);


// let myNumber = 4;
// myNumber =  myNumber + 10;
// console.log(myNumber);


// const myNull = null;
// console.log(myNull);
    

// let userName = prompt("Введіть своє ім’я");
// alert(userName);
// console.log(userName);


// let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
// console.log(userAnswer);


// alert("Увага! Дія може бути небезпечною.");
// let agree = confirm("Ви впевнені, що хочете продовжити?")
// console.log(agree);

// let celsius = prompt("Введіть вашу температуру за цельсієм");
// let fahrenheit = ((celsius * 9 / 5 ) + 32);
// alert(fahrenheit);
// console.log(fahrenheit);


// let daysInMonth = prompt("Введіть кількість днів у місяці");
// let hoursInMonth = daysInMonth * 24 ;
// alert(hoursInMonth + " годин");

// let minutesInMonth = hoursInMonth * 60;
// alert(minutesInMonth + " хвилин");
// console.log(hoursInMonth , minutesInMonth);



// let health = 100;
// let energy = 100;

// let healthLost = Number(prompt("на скільки рівень здоров'я впав?"));
// health = health - healthLost;
// alert("залишилось здоров'я "  + health );

// let energyLost = Number(prompt("на скільки рівень енергії впав?"));
// energy = energy - energyLost;
// alert("залишилось енергії " + energy );


// let totalPrice = Number(prompt("яка буде сума покупки у магазині?"));
// let discount = 0.10
// let discountedPrice = totalPrice - (totalPrice * discount)
// alert("ціна із снижкою " + discountedPrice);

// const floatNumber = 12.78;
// let roundedDown = Math.floor(floatNumber);
// console.log("округлене число " + roundedDown);

// const floatString = "45.67 ";
// let parsedFloat = parseFloat(floatString);
// console.log("перетворене число " + parsedFloat );


// const intString = "123";
// let parsedInt = parseInt(intString);
// console.log(parsedInt);

// let number = Number(prompt("вкажіть число для розрахунку"));
// let sqrtNumber = Math.sqrt(number);
// alert(sqrtNumber);

// const integer = 42;
// const stringNumber = "256";
// let convertedInt = parseInt(stringNumber);
// let convertedString = integer.toString();
// console.log("число у рядок " + convertedString , "рядок у число " + convertedInt);




// const message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum reiciendis necessitatibus iure aliquid porro ex atque ea corporis recusandae fuga delectus, ducimus fugit blanditiis sint ratione laboriosam molestias repellendus itaque?"
// console.log(message[message.length-1]);
// console.log(message.indexOf("L")); //Повертає індекс першого входження якщо не знайшов повертає -1;
// console.log(message.includes("єєє"));//Повертає true або false;



// const userEmail = "test@gmail.com";
// console.log(userEmail.startsWith("qquqe"));
// console.log(userEmail.endsWith(".com"));

// const testText = prompt("Введіть ваше ім'я").trim();
// console.log(testText.length);

// const userNumber = "050-123-1111"
// console.log(userNumber.length);
// const addedNumber = userNumber.padStart(16,"+38-")
// console.log(addedNumber);
// const fixNumber = userNumber.padEnd(40,"abc")
// console.log(fixNumber);


// const name = "David";
// const lastName = "Usharuk";
// const result = `${name} ${lastName}`;
// console.log(result.length);

// const myName = "David";
// console.log(myName.toUpperCase());


// const myName = "David";
// console.log(myName.charAt());




// Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .indexOf(), знайти і вивести в консоль ПОЗИЦІЮ, на якій знаходиться пробіл між ім'ям та прізвищем.

// const myFullName = "Usharuk David"
// console.log(`${myFullName.indexOf(" ") +1}`);





// const myName = "David";
// console.log(myName.replace("D","@"));

// const string = "JavaScript";
// console.log(string.substring("0","4"));





// const message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum reiciendis necessitatibus iure aliquid porro ex atque ea corporis recusandae fuga delectus, ducimus fugit blanditiis sint ratione laboriosam molestias repellendus itaque?";
// const sliceMessage = message.slice(0 , 40);
// console.log(sliceMessage);



// Напиши скрипт який виведе рядок в форматі: “Гість x y поселяється в n номер g”, підставивши замість x, y, n, g значення змінних.

        // const userName = prompt("Як вас звати?");
        // const userLastName = prompt("Яке ваше прізвище?");
        // const roomNumber = prompt("Який номер готелю ви забронювали?");

        // alert(`Вітаю,гість ${userName} ${userLastName} посиляється у номер ${roomNumber}`.toUpperCase());


// const a = 5;
// const b = 5;
// const c ="5"
// const result = a + b + c;
// console.log(result);

// const email = "usarukdavid8@gmail.com";
// console.log(email.includes("@"));
// console.log(email.length);

// const first = "My";
// const second = "name";
// const third = "is";
// const fullname = first + " " + second + " " + third;
// const ress = fullname + " " + "Viktor";
// console.log(ress);

// const userName = prompt("Введыть ваше ім'я");
// const payment = "111";
// alert(`Дякуємо за покупуку ${userName}, до сплати ${payment} грн`)


// console.log(Boolean(""));
// console.log(Boolean(Nan));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(null));

// // всьо тру але якщо э фолс то на ньому зупиняэться
// console.log(1 && 5 && 3 && "b" && 7);

// // || або логічний оператор якщо є хоч одне тру то повертає його ая кщо є фолс то оатсанній
// console.log(44||99);
// // логічне не перетворюэ ! в булеве значення в протележжне
// console.log(!0);
// const firstTextField = prompt("заповніть перше текстове поле");
// const secondTextField = prompt("заповніть друге текстове поле");
// if(firstTextField !== "" && secondTextField !== ""){
//     alert("усі поля заповненні");
// }else{
//     alert("не всі поля заповнені")
// }


// const firstNumber = Number(prompt("Введіть перше число"));
// const secondNumber = Number(prompt("Введіть друге число"));
// const result = firstNumber + secondNumber
// if(result>10){
//     alert("Число більше 10");
// }else{
//     alert("Число менше 10");
// }


// const jS = prompt("ведіть текст JavaScript")
// if(jS.includes("JavaScript")){
//     alert("Текст містить слово JavaScript");
// }else{
//     alert("Текст не містить слово JavaScript");
// }



// const diapazon = Number(prompt("Введіть ваше любе число"));
// if(10<diapazon && diapazon<20){
//     alert("число в діапазоні числа 10 та 20")
// }else{
//     alert("число не в діапазоні 10 та 20")
// }


// const name = prompt("Введіть ваше ім'я");
// const email = prompt("Введіть вашу пошту");
// const password = prompt("Введіть ваш пароль");
// if(name.length >3 && email.includes("@") && password.length >6){
//     alert("Перенаправлення на іншу сторінку")
// }else{
//     alert("Помилка: неправильне заповнення")
// }


// const drinks =  parseInt(prompt("Виберіть який напій будете: 1-кава 2-чай 3-сік").trim());

// switch (drinks){
//     case 1:
//         alert("Ви обрали напій кава")
//         break;
//     case 2:
//         alert("Ви обрали напій чай")
//         break;
//     case 3:
//         alert("Ви обрали напій сік")
//         break;
//     default:
//         alert("Такого варіанту відповіді нема")
//         break;
// }


// const days = parseInt(prompt("Виберіть любий день тижня: 1-Понеділок  2-Вівторок  3-Середа  4-Четвер  5-Пятниця  6-Субота  7-Неділя").trim());

// switch (days){
//     case 1:
//         alert("Ви обрали день Понеділок")
//         break;
//     case 2:
//         alert("Ви обрали день Вівторок")
//         break;
//     case 3:
//         alert("Ви обрали день Середа")
//         break;
//     case 4:
//         alert("Ви обрали день Четвер")
//         break;
//     case 5:
//         alert("Ви обрали день Пятниця")
//         break;
//     case 6:
//         alert("Ви обрали день Субота")
//         break;
//     case 7:
//         alert("Ви обрали напій Неділя")
//         break;
//     default:
//         alert("Такого варіанту відповіді нема")
//         break;
// }


// const month = parseInt(prompt("Введіть число під яким стоіть ваш забажаний місяць").trim());

// switch (month){
//     case 1:
//     case 2:
//     case 12:
//         alert("Ваша пора року зима")
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert("Ваша пора року весна")
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert("Ваша пора року літо")
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert("Ваша пора року осінь")
//         break;
//     default:
//         alert("Ви не вибрали жодного місяця отже вам не вказано жодноі пори року");
//         break;
// }


// const color = prompt("Напишыть любий колір світлофора і ми вкажем ваші подальші діЇ").toLowerCase().trim();


// switch (color){
//     case "червоний":
//         alert("зупиніться")
//         break;
//     case "жовтий":
//         alert("очікуйте")
//         break;
//     case "зелений":
//         alert("проїзжайте")
//         break;
//     default:
//         alert("ви не написала жодного коліру який є у світлофорі")
//         break;
// }



// const firstNumber = Number(prompt("Введіть перше число:").trim());
// const secondNumber = Number(prompt("Введіть друге число:").trim());

// const operator = prompt("Введіть оператор (+, -, *, /)").trim();

// let result;

// switch(operator){
//     case "+":
//         result = firstNumber + secondNumber
//         break;
//      case "-":
//         result = firstNumber - secondNumber;
//         break;
//     case "*":
//         result = firstNumber * secondNumber;
//         break;
//     case "/":
//         if (secondNumber === 0){
//             alert("ділення на ноль неможливе і неможна")
//         } else {
//             result = firstNumber / secondNumber
//         }
//         break;
//     default:
//         alert("ви не вказали потрібного оператора")
//         break;

// }
//     alert("Ваш результат:" + result)
// for (let i = 0; i <=10; i += 1;){
//     console.log(i);
// }

// const userInfo = "Мене звати давид я начаюся в GoIteens";



// for(let i = 0; i < userInfo.length; i += 1){
//     if(userInfo[i] === " "){
//         continue
//     } 

//         console.log(userInfo[i]);
// }

// for(let i = 0; i < userInfo.length; i += 1){
//     if(userInfo[i] === " "){
//         continue
//     }
//     if(userInfo[i] === "G"){
//         break
//     } 

//         console.log(userInfo[i]);
// }



// const numbers = ["+133 1131 131 1111 ","+334 4000 113 9090","+111 1231 656 7777","+909 1234 678 9999","+898 9833 123 6767","+791 1371 313 111"]
// const findToNumbers = "+909 1234 678 9999"
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] = findToNumbers){
//         console.log(`Ура ми найшли потрібний нам номер : ${numbers[i]}`);
//         break
//     }
// }






// let counter = 0;
// while (counter < 50){
//     console.log(counter);
//     counter += 1;
    
// }


// for(let counter = 0; counter < 50; counter += 1){
//     console.log(counter);
    
// 


// let counter = 50;
// while (counter >= 0){
//     console.log(counter);
//     counter -= 1;
    
// }


// for(let counter = 50 ; counter > 0; counter -= 1){
//     console.log(counter);
    
// }



//Задача 3: Порахувати суму чисел від 1 до 10 (while)
// let counter = 0;
// let suma = 0;
// while (counter <= 10){
//     suma +=  counter

//     counter += 1;
// }
//     console.log(suma);



// let sum = 0;
// for(let i = 0 ; i <= 10 ; i += 1){

//     sum += 1;
// }
//     console.log(sum); 




// for (let number = 1; number < 10 ; number += 2){
//     console.log(number);
    
// }

// let number = 1 ;
// while( number < 10){
//         console.log(number);
//     number += 2;

// }

// let counter = 0;
// while (counter <= 20){
//     counter += 1;
//     if(counter === 10){
//         continue
//     }
// }


// let num;
// do {
//     num = parseInt(prompt("введіть число більше 10"))
// }while (num <= 10)



// let num;

// do {
//     num = Number(prompt("Ведіть число більше 0"));
    
// }while (num <= 0 || isNaN(num)) 
//     console.log(num);

// let num;
// do {
//     num = Number(prompt("введіть номер телефону 10 цифр"))
//     if( num === null){
//         alert("дія скасована")
//         break
//     }
//     if(num.length === 10 && isNaN(num)){
//         alert=("номер телефону прийнято")
//         break;
//     }else{
//         alert("невірні данні")
//     }
// } while (true)
//let i = 0;
// while (i <= 10){
//     console.log(i);
//     i = i + 1;
    
// }

// for (let q = 2 ; q <= 20 ; q += 2){
//       if (q % 2 !== 0) {
//         continue; 
//   }
//   console.log(q);
  
// }




// const number = 7;
// for(let s = 0; i <= 10; i+= 1){
//     console.log(`${number * s}`);
    
// }




// let fixedNumber = Number(prompt("введіть ваше число n"))
// for(let l = 0 ; l < fixedNumber ; l += 1){
//     if (l > fixedNumber){
//         break
//     }
//     console.log(l);
    
// }



// let d = 1
// while(d <= 20){
//     d = d + 1
//           if (d % 3 === 0) {
//         continue; 
//   }
//   console.log(d);
  
// }

// const num = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(num[0][0]);
// console.log(num[1][1]);

// const numbers = [12, 47, 83, 59, 64, 28, 91, 36]

// for(const q of numbers){
//         console.log(q);
//         if(q % 2 === 1){
//                 console.log(q);
//                 break
//         }
// }


// const numbers = [-12, 47, 83, 59, -64, 28, 91, -36]
// let sum = 0;
// for(const q of numbers){
//         if(q > 0){

//                 sum += q 
//         }
// }
// console.log(sum);


// const cart = [12, 47, 83, 59, 64, 28, 91, 36, 75, 42, 88, 53];
// cart[cart.length]=1000;
// console.log(cart);

// const numbers = [12, 47, 5, 88, 63, 29, 94, 31, 56, 72, 6, 18, 40, 67, 81, 25, 90, 14, 38, 53];
// let minNumbers = numbers[0]
// for (let i = 0; i < numbers.length ; i += 1){
//     if(minNumbers > numbers[i]){
//         minNumbers = numbers[i]
//     }

    
// }
//     console.log(minNumbers);




// Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let sumArray = 0;
// for (let i = 0; i < array1.length ; i += 1){

//     sumArray += array1[i]
    
// }
// for (let i = 0; i < array2.length ; i += 1){

//     sumArray += array2[i]
    
// }
//     console.log(sumArray);

// const phones = ["0931234567","0671112233","0501234890","0991234765","0631112255","0971234111","0681234999","0931112200","0661234321","0951234654"];
// for(let i = 0; i < phones.length; i += 1){

//     console.log(phones[i].padStart(13, "+38"));
    
// }

// const names = ["Олександр","Марія","Іван","Анастасія","Андрій","Олена","Дмитро","Катерина","Сергій","Юлія",];
// for( let i = 0; i < names.length ; i += 1){
//     if(names[i] === "Анастасія")
//         console.log("анастасія під індексом".i);
        
    

// }
// const numbers = [12, 47, 5, 88, 63, 29, 94, 31, 56, 72, 6, 18, 40, 67, 81, 25, 90, 14, 38, 53];
// for(let i = 0; i < numbers.length ; i += 1){
//     console.log(numbers[i]);
//     if(numbers[i] % 2 === 1){
//       console.log(numbers[i] += 1000);

//     }
// }
// const numbers = [1, 12 , 33]
// numbers[1] = 10
// console.log(numbers);





// const strings = ["Привіт", "Масив", "Рядки"];
// strings[3] = "Чорний"
// console.log(strings);





// const numbersSumm = [3, 7, 12, 18, 30];  

// let summa = 0;

// for (let i = 0; i < numbersSumm.length; i += 1){
//     summa += numbersSumm[i]
// }
// console.log(summa);



// const masuv = [ 1 , 2 , 3 , 4 , 5];
// for( let i = 0;i < masuv.length; i += 1){
//     console.log(masuv[i]);
    
// }


// const stringsSecond = ["Телефон", "JavaScript", "Духи", "Рядки", "Собака"];

// for( let i = 0;i < stringsSecond.length; i += 1){
//     if( stringsSecond[i].length > 6 ){

//     console.log(stringsSecond[i]);

//     }
    
// }



// const chusla = [3, 7, 12, 18, 25, 30, 41, 56, 72, 89];

// let maxNumber = chusla[0];
// for( let i = 0;i < chusla.length; i += 1){
//     if(maxNumber < chusla[i]){
//     maxNumber = chusla[i]
//     };
// }
// console.log(maxNumber);



// const number = [3, 7, 12, 18, 25, 30, 41, 56, 72, 89];
// for( let i = 0;i < number.length; i += 1){
//     if(number[i] % 2 === 0){
//     console.log(number[i]);
    
//     };
// }
//     const names = [
//   "Олександр", "Марія", "Іван", "Анастасія", "Андрій", "Олена", "Дмитро", "Катерина", "Сергій", "Юлія",
//   "Михайло", "Вікторія", "Богдан", "Тетяна", "Артур", "Ігор", "Алла", "Степан", "Наталія",
//   "Павло", "Ганна", "Максим", "Оксана", "Ростислав", "Лілія", "Василь", "Дарина", "Єгор", "Людмила",
//   "Світлана", "Роман", "Вероніка", "Єлизавета", "Олег", "Мирослава", "Віталій", "Софія", "Антон", "Ніна",
//   "Зоряна", "Валентина", "Тимур", "Кирило", "Ілля", "Валерія", "Ярослав", "Поліна", "Галина", "Владислав",
//   "Оксен", "Любомир", "Марта", "Орися", "Данило", "Злата", "Володимир", "Каріна", "Арсен", "Емілія",
//   "Петро", "Олексій", "Роксолана", "Олександра", "Денис", "Єва", "Семен", "Одарка", "Остап", "Еліза",
//   "Федір", "Уляна", "Мирон", "Евеліна", "Григорій", "Інна", "Савелій", "Орися", "Матвій", "Жанна",
//   "Артем", "Христина", "Тарас", "Олеся", "Микола", "Надія", "Лев", "Мирослава", "Євген", "Аліса",
//   "Анатолій", "Аліна", "Ксенія", "Гриша", "Руслан", "Станіслав", "Леся", "Фаїна", "Юрій", "Елеонора"
// ];
// //знайти юрія і замінити його 

// const copyNames = names.slice()
// const findNames = "Юрій"
// const index = copyNames.indexOf(findNames)
// console.log(index);
// copyNames.splice(index, 1 , "карвувувуувуву")
// console.log(copyNames);
// const mesag = "дозволяє перетворити рядок в масив, розбивши її по розподілу";
// console.log(mesag.split(","));
//  split перетворює рядок в масив\

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// console.log(friends.join(", "));


//Робимо slug з назви статті з URL адреси,
// Заголовок статті складається тільки з букв та пропусків,
// Нормалізуємо рядок,
// Розбиваємо по словах,
// Записуємо в рядок з роздільником,
// Чейнінг
// повинно получитися top-10-benefits-of-react-fremework
//  const title = "Top 10 Benefits Of React Fremework";
//  const result = title.toLowerCase().split(' ').join('-')
//  console.log(result);
 

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const findName = 'Poly';
// const indexL = friends.indexOf(findName)
// console.log(indexL);
// const findName = 'Kiwi';
// const indexL = friends.includes(findName);
// console.log(indexL);



// friends.unshift("ddd", 'ddd');
// console.log(friends);
// friends.push(false, 'array', 45);
// console.log(friends);
// friends.shift()
// console.log(friends);
// friends.pop()
// console.log(friends);


// метод slice(start,end) робить копію масива повністю якщо ми нічого не передаєм , а якщо передаємо йому start і  end то робить копіб масиву від start до end але не включно end;


// const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto a recusandae, assumenda, expedita consectetur sequi distinctio magnam earum corrupti debitis quos iure tempora libero, repudiandae quasi explicabo non. Ad, aspernatur.'

// const changes = message.slice(0,10);
// console.log(changes);

// const names = [
//   "Олександр",
//   "Марія",
//   "Іван",
//   "Анастасія",
//   "Андрій",
//   "Олена",
//   "Дмитро",
//   "Катерина",
//   "Сергій",
//   "Юлія",
//   "Михайло",
//   "Вікторія",
//   "Богдан",
//   "Тетяна",
//   "Артур"
// ];



// const names3 = names.slice(3,7)
// console.log(names3);

// const names2 = names;
// names2.push('Артем','Руслан')
// console.log(names);
// console.log(names2);
// console.log(names2 === names);



// const copyNames = names.slice()
// copyNames.push('Давид')
// console.log(names);
// console.log(copyNames);
// console.log(copyNames === names);


// const numbers = [ 1 , 2 ,3 ,4, 5]
// const otherNumbers = [6,7,8,9,10]
// const lastNumbers = [11,12,13,14,15]

// const result1 = lastNumbers.concat(otherNumbers,numbers)
// console.log((result1).sort());

// const result = numbers.concat(otherNumbers,lastNumbers)
// console.log(result);



//splice() Ззмінює оригінальний масив і може робити з ним шо ебудь
    // const names = [
    // "Олександр",
    // "Марія",
    // "Іван",
    // "Анастасія",
    // "Андрій",
    // "Олена",
    // "Дмитро",
    // "Катерина",
    // "Сергій",
    // "Юлія",
    // "Михайло",
    // "Вікторія",
    // "Богдан",
    // "Тетяна",
    // "Артур"
    // ];
//видалення елементів з масиву
// const copyNames = names.slice();
// const result = copyNames.splice(0,4)
// console.log(result);








//додавання елементів д масиву

// copyNames.splice(12 , 0 , "Ігор")
// console.log(copyNames);


//замінити 

// copyNames.splice(5,1,"Катерина")
// console.log(copyNames);







// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];


// let string = "";

// for (let i = 0; i < friends.length; i += 1) {
//   string += friends[i];

//   if (i < friends.length -1) {
//     string += ",";
//   }
// }

// console.log(string);




// const friend = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// console.log(friend.join(","));





// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
// ];


// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove)
// cards.splice(index, 1)
// console.log(cards);



// const cardToInsert = 'Карточка-6'
// cards.push(cardToInsert)
// console.log(cards);


// const cardToUpdate = "оновлена карточка 4";
// cards.splice(2,1,cardToUpdate)
// console.log(cards);