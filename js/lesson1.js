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







const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];


let string = "";

for (let i = 0; i < friends.length; i += 1) {
  string += friends[i];

  if (i < friends.length -1) {
    string += ",";
  }
}

console.log(string);




const friend = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
console.log(friend.join(","));





const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];


const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove)
cards.splice(index, 1)
console.log(cards);



const cardToInsert = 'Карточка-6'
cards.push(cardToInsert)
console.log(cards);


const cardToUpdate = "оновлена карточка 4";
cards.splice(2,1,cardToUpdate)
console.log(cards);