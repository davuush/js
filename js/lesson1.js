const numbers = [1, 12 , 33]
numbers[1] = 10
console.log(numbers);





const strings = ["Привіт", "Масив", "Рядки"];
strings[3] = "Чорний"
console.log(strings);





const numbersSumm = [3, 7, 12, 18, 30];  

let summa = 0;

for (let i = 0; i < numbersSumm.length; i += 1){
    summa += numbersSumm[i]
}
console.log(summa);



const masuv = [ 1 , 2 , 3 , 4 , 5];
for( let i = 0;i < masuv.length; i += 1){
    console.log(masuv[i]);
    
}


const stringsSecond = ["Телефон", "JavaScript", "Духи", "Рядки", "Собака"];

for( let i = 0;i < stringsSecond.length; i += 1){
    if( stringsSecond[i].length > 6 ){

    console.log(stringsSecond[i]);

    }
    
}



const chusla = [3, 7, 12, 18, 25, 30, 41, 56, 72, 89];

let maxNumber = chusla[0];
for( let i = 0;i < chusla.length; i += 1){
    if(maxNumber < chusla[i]){
    maxNumber = chusla[i]
    };
}
console.log(maxNumber);



const number = [3, 7, 12, 18, 25, 30, 41, 56, 72, 89];
for( let i = 0;i < number.length; i += 1){
    if(number[i] % 2 === 0){
    console.log(number[i]);
    
    };
}