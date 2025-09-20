// const name = 'daria'
// const last = 'lastName'



// const user =    {
//     name,
//     [last]: 'kovalchuk',
//     age: 27 ,
//     friends:     ['vania','anna','poseydon'],
//     'friends age': {
//         vania : 13,
//         anna : 49,
//         poseydon: 69
//     }
// }

// user.name = 'pasha'
// user.location = "pakestan"
// user.age = 34
// user.friends[0] = 'vasia'
// user["friends age"].poseydon = 111



// // delete user.age


// console.log(user['name']);
// console.log(user.name);


// Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.

// const students = [
//   { name: "Іван", age: 18, gender: "male", grade: 85 },
//   { name: "Олена", age: 19, gender: "female", grade: 92 },
//   { name: "Андрій", age: 20, gender: "male", grade: 78 },
//   { name: "Марія", age: 18, gender: "female", grade: 88 },
//   { name: "Сергій", age: 21, gender: "male", grade: 95 }
// ];


// const middle = array =>{
//     let summa = 0
//     for (let i = 0; i< array.length; i += 1){
//         if(array[i].grade){
//         summa += array[i].grade
//         }

//     }
// return summa / array.length
// }
// console.log(middle(students));

// const students2 = [
//   { name: "Катерина", age: 17, gender: "female", grade: 90 },
//   { name: "Дмитро", age: 18, gender: "male", grade: 76 },
//   { name: "Оксана", age: 19, gender: "female", grade: 84 },
//   { name: "Володимир", age: 20, gender: "male", grade: 95 },
//   { name: "Наталя", age: 18, gender: "female", grade: 88 },
//   { name: "Тарас", age: 21, gender: "male", grade: 81 }
// ];
// console.log(middle(students2));

// const a = 5;
// let b = a;
// b = 10;
// console.log(a);
// console.log(b);

// const a = {
//   name: "Max",
//   age: 24,
// }


// const b = a;
// b.name = "Bogdan"
// console.log(a);
// console.log(b);

// const user = {
//   name: "Max",
//   surName: "Kobalt",
//   age: 19,
//   friends: ["Maxim","Andrew"],
//   // otherName: function (name){

//   // }
//   otherName () {
//    return this.name
//   },
//   changeName (newName){
//     returm (this.name = newName)
//   },
//   changeSurName (){
//     const newSurName = prompt("Введіть прізвище")
//     return this.surName = newSurName
//   }
// }
// console.log(user.otherName());
// console.log(user.changeName(User123));
// console.log(user.changeSurName);



// 4. До об’єкту myArray додати методи increaseAge(age), який буде отримувати число та збільшувати вік на це число.







// До об’єкту myArray додати методи changeOccupation(position), який буде отримувати посаду та змінювати властивість occupation.

// const myArray = {
//   name: "Max",
//   age: 56,
//   occupation: "Manager",
//   friends: ["Maxim", "Andrew"],

//   increaseAge(newAge) {
//     return (this.age = newAge);
//   },

//   changeOccupation(position) {
//     return (this.occupation = position);
//   },
// };
// console.log(myArray.increaseAge(24));
// console.log(myArray.changeOccupation("CEO"));

// myArray.changeFriend = function (newFriend) {
//   return this.friends.push(newFriend);
// };

// myArray.countFriends = function() {
//     return this.friends.length
// }
// console.log(myArray.changeFriend("USkfgjdf"));
// console.log(myArray);


// Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.


// const person = {
//   name: "Max",
//   age: 77,
//   gender: "male",

//   setPerson(){
//     alert(`Ім'я ${this.name}, вік ${this.age}, стать ${this.gender  }`)
//   }
// }
// person.setPerson()


// Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.
// const students = [{
//     name: "Max",
//     age: 77,
//     gender: "male",
//     grade: 100
// },
// {
//     name: "Vasia",
//     age: 44,
//     gender: "male",
//     grade: 120
// },
// {
//     name: "Yura",
//     age: 69,
//     gender: "male",
//     grade: 111
// }
// ]
// const averageScore = array => {
//   let sum = 0
//   for( let i = 0 ; i < array.length; i += 1){
//     if(array[i].grade){
//       sum += array[i].grade
//     }
//   }
//   return sum / array.length
// }
// console.log(averageScore(students));


// Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.


// const book = {
//     title: "назва книги ",
//     author: "автор",
//     year: 2018,
//     genre: "жанр"
// }


// book.changeValue = function (newTitle, newAuthot, newYear, newGenre){
//     if(newTitle){
//       this.title= newTitle
//     }
//     if(newAuthot){
//       this.author= newAuthot
//     }
//     if(newYear){
//       this.year= newYear
//     }
//     if(newGenre){
//       this.genre= newGenre
//     }
// }
// book.changeValue("Розробка програм для Windows 8 за допомогою HTML5 та JavaScript. Детальний посібник","Штефен Вальтер",2022,
// "Електронна книга")
// console.log(book);]


// const object = {
//   name: "taylor",
//   surName: "swift",
//   age: 45,
//   changeAge(newAge){
//     this.age = newAge
//     console.log(this.age);
//   }  
// }

// console.log(object);
// object.changeAge(50)
// console.log(object);

// const name = prompt("Введіть своє ім'я")
// console.log(name);
// if (name){
//   console.log("hoora");
  
// }


// book.changeValue = function (newTitle, newAuthot, newYear, newGenre){
//     if(newTitle){
//       this.title= newTitle
//     }
//     if(newAuthot){
//       this.author= newAuthot
//     }
//     if(newYear){
//       this.year= newYear
//     }
//     if(newGenre){
//       this.genre= newGenre
//     }
// }
// book.changeValue()
