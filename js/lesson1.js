const firstTextField = prompt("заповніть перше текстове поле");
const secondTextField = prompt("заповніть друге текстове поле");
if(firstTextField !== "" && secondTextField !== ""){
    alert("усі поля заповненні");
}else{
    alert("не всі поля заповнені")
}


const firstNumber = Number(prompt("Введіть перше число"));
const secondNumber = Number(prompt("Введіть друге число"));
const result = firstNumber + secondNumber
if(result>10){
    alert("Число більше 10");
}else{
    alert("Число менше 10");
}


const jS = prompt("ведіть текст JavaScript")
if(jS.includes("JavaScript")){
    alert("Текст містить слово JavaScript");
}else{
    alert("Текст не містить слово JavaScript");
}



const diapazon = Number(prompt("Введіть ваше любе число"));
if(10<diapazon && diapazon<20){
    alert("число в діапазоні числа 10 та 20")
}else{
    alert("число не в діапазоні 10 та 20")
}


const name = prompt("Введіть ваше ім'я");
const email = prompt("Введіть вашу пошту");
const password = prompt("Введіть ваш пароль");
if(name.length >3 && email.includes("@") && password.length >6){
    alert("Перенаправлення на іншу сторінку")
}else{
    alert("Помилка: неправильне заповнення")
}
