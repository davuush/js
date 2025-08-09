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


