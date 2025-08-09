const drinks =  parseInt(prompt("Виберіть який напій будете: 1-кава 2-чай 3-сік").trim());

switch (drinks){
    case 1:
        alert("Ви обрали напій кава")
        break;
    case 2:
        alert("Ви обрали напій чай")
        break;
    case 3:
        alert("Ви обрали напій сік")
        break;
    default:
        alert("Такого варіанту відповіді нема")
        break;
}


const days = parseInt(prompt("Виберіть любий день тижня: 1-Понеділок  2-Вівторок  3-Середа  4-Четвер  5-Пятниця  6-Субота  7-Неділя").trim());

switch (days){
    case 1:
        alert("Ви обрали день Понеділок")
        break;
    case 2:
        alert("Ви обрали день Вівторок")
        break;
    case 3:
        alert("Ви обрали день Середа")
        break;
    case 4:
        alert("Ви обрали день Четвер")
        break;
    case 5:
        alert("Ви обрали день Пятниця")
        break;
    case 6:
        alert("Ви обрали день Субота")
        break;
    case 7:
        alert("Ви обрали напій Неділя")
        break;
    default:
        alert("Такого варіанту відповіді нема")
        break;
}


const month = parseInt(prompt("Введіть число під яким стоіть ваш забажаний місяць").trim());

switch (month){
    case 1:
    case 2:
    case 12:
        alert("Ваша пора року зима")
        break;
    case 3:
    case 4:
    case 5:
        alert("Ваша пора року весна")
        break;
    case 6:
    case 7:
    case 8:
        alert("Ваша пора року літо")
        break;
    case 9:
    case 10:
    case 11:
        alert("Ваша пора року осінь")
        break;
    default:
        alert("Ви не вибрали жодного місяця отже вам не вказано жодноі пори року");
        break;
}


const color = prompt("Напишыть любий колір світлофора і ми вкажем ваші подальші діЇ").toLowerCase().trim();


switch (color){
    case "червоний":
        alert("зупиніться")
        break;
    case "жовтий":
        alert("очікуйте")
        break;
    case "зелений":
        alert("проїзжайте")
        break;
    default:
        alert("ви не написала жодного коліру який є у світлофорі")
        break;
}



const firstNumber = Number(prompt("Введіть перше число:").trim());
const secondNumber = Number(prompt("Введіть друге число:").trim());

const operator = prompt("Введіть оператор (+, -, *, /)").trim();

let result;

switch(operator){
    case "+":
        result = firstNumber + secondNumber
        break;
     case "-":
        result = firstNumber - secondNumber;
        break;
    case "*":
        result = firstNumber * secondNumber;
        break;
    case "/":
        if (secondNumber === 0){
            alert("ділення на ноль неможливе і неможна")
        } else {
            result = firstNumber / secondNumber
        }
        break;
    default:
        alert("ви не вказали потрібного оператора")
        break;

}
    alert("Ваш результат:" + result)