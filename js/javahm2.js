let celsius = prompt("Введіть вашу температуру за цельсієм");
let fahrenheit = ((celsius * 9 / 5 ) + 32);
alert(fahrenheit);
console.log(fahrenheit);


let daysInMonth = prompt("Введіть кількість днів у місяці");
let hoursInMonth = daysInMonth * 24 ;
alert(hoursInMonth + " годин");
let 
;
alert(minutesInMonth + " хвилин");
console.log(hoursInMonth , minutesInMonth);



let health = 100;
let energy = 100;

let healthLost = Number(prompt("на скільки рівень здоров'я впав?"));
health = health - healthLost;
alert("залишилось здоров'я "  + health );

let energyLost = Number(prompt("на скільки рівень енергії впав?"));
energy = energy - energyLost;
alert("залишилось енергії " + energy );


let totalPrice = Number(prompt("яка буде сума покупки у магазині?"));
let discount = 0.10
let discountedPrice = totalPrice - (totalPrice * discount)
alert("ціна із снижкою " + discountedPrice);

const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log("округлене число " + roundedDown);

const floatString = "45.67 ";
let parsedFloat = parseFloat(floatString);
console.log("перетворене число " + parsedFloat );


const intString = "123";
let parsedInt = parseInt(intString);
console.log(parsedInt);

let number = Number(prompt("вкажіть число для розрахунку"));
let sqrtNumber = Math.sqrt(number);
alert(sqrtNumber);

const integer = 42;
const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
let convertedString = toString(integer);
console.log("число у рядок " + convertedString , "рядок у число " + convertedInt);