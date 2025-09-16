// map – tworzy nową tablicę przekształconych wartości (element-po-elemencie).
// filter – wybiera tylko te elementy, które spełniają warunek.
// includes – sprawdza, czy tablica (albo string) zawiera daną wartość.
// some - Sprawdza, czy chociaż jeden element tablicy spełnia warunek.
// every - Sprawdza, czy wszystkie elementy tablicy spełniają warunek. 
// join – łączy elementy tablicy w jeden string z podanym separatorem.
// concat – scala tablice w nową tablicę (nie modyfikuje oryginałów).
// foreach – wykonuje podaną funkcję dla każdego elementu tablicy (nie tworzy nowej tablicy).

// map – tworzy nową tablicę przekształconych wartości (element-po-elemencie).
// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(el => {
//     console.log(el)
//     return el * 2;
// })

// console.log(doubled);
// filter – wybiera tylko te elementy, które spełniają warunek.

// const even = numbers.filter(el => el % 2 === 0);
// console.log(even);

// includes – sprawdza, czy tablica (albo string) zawiera daną wartość.

// const owoce = ['jabłko', 'banan', 'gruszka', 'kiwi', 'mango'];
// const hasKiwi = owoce.includes('kiwi');
// const hasWinogrono = owoce.includes('winogrono');

// console.log({hasKiwi, hasWinogrono});
// some - Sprawdza, czy chociaż jeden element tablicy spełnia warunek.

// const liczby = [2,5,8,1,4];
// const czyjestwiekszyod6 = liczby.some(el =>el > 6);
// console.log(czyjestwiekszyod6);

// every - Sprawdza, czy wszystkie elementy tablicy spełniają warunek.
// const oceny = [5,4,5,5,3];
// console.log(oceny.every(el => el >= 4));
// join – łączy elementy tablicy w jeden string z podanym separatorem.

// const slowa = ['JavaScript', 'jest', 'super'];
// const zdanie = slowa.join(' ');
// const zdanie1 = slowa.join('-');
// console.log({zdanie, zdanie1});

// concat – scala tablice w nową tablicę (nie modyfikuje oryginałów).
// const klasaA = ['Ania', 'Bartek', 'Cezary'];
// const klasaB = ['Dorota', 'Ewa', 'Filip'];
// const wycieczka = klasaA.concat(klasaB);
// console.log(wycieczka);

// const resquest = ['1endpoint', '2endpoint', '3endpoint'];
// const response = [];


// resquest.forEach(el => {
//     console.log(`Pobieram dane z ${el}`);
//     response.push(`Dane z ${el}`);
// }

// 1 . napisz kod ktory wybierze tylko uzytkownikow z rola "superadmin" i zwroci ich imiona
const users = [
  { id: 1, name: "Kasia", role: "admin" },
  { id: 2, name: "Bartek", role: "superadmin" },
  { id: 3, name: "Ola", role: "superadmin" },
  { id: 4, name: "Marek", role: "moderator" }
];

// tworzymy nowa tablice ktora jest stworzona z elementow pofiltorwanych (superadmin);
// const filterUser = users.filter(user => {
//     return user.role === 'superadmin'
// }) 

// const names = filterUser.map(user => {
//     return user.name
// })

// console.log(names)


// 2. sprawdz za pomoca includes czy w sklepie dostepny jest laptop jesli tak 
// const products = ['telefon', 'tablet', 'laptop', 'monitor', 'klawiatura'];
// const hasLaptop = products.includes('laptop');
// console.log({hasLaptop});

// 3. uzyj map aby policzyc ceny brutto ( z vat 23%)
// const pricesNetto = [100, 250, 399, 599, 799];

// const priceBrutto = pricesNetto.map(price => {
//     return price *1.23;
// })

// const prices = [{id:1, price:100}, {id:2, price:250}, {id:3, price:399}, {id:4, price:599}, {id:5, price:799}];

// const pricesWithId = prices.map(el => {
//     return el.price * 1.23;
// })

// console.log({   priceBrutto, pricesWithId});


//4. uzyj filter aby wybrac tylko zaowinie zakonczone status === 'completed' i majace wartosc wieksza niz 100
// const orders = [
//   { id: 1, total: 80, status: "completed" },
//   { id: 2, total: 75, status: "pending" },
//   { id: 3, total: 300, status: "completed" },
//   { id: 4, total: 500, status: "canceled" }
// ];

// const completedOrders = orders.filter(order => {
//     return order.status === 'completed';
// })

// const highValueOrders = completedOrders.filter(order => {
//     return order.total > 100;
// })

// console.log({completedOrders,highValueOrders})


// const userNames = users
//   .filter(user => user.id == 1)
//   .map(user => user.role);

//   console.log(userNames);
// //   .map(user => user.name);


//operator przypisania 
// const name = 'Jan';
//operatory porownaia  == albo jest === 
// 1. podwojny operator przypisania sprawda tylko wartosc a jesli typy sa rozne - javascript sprobouje dopasowac typy
// console.log('==');
// console.log(5 == '5'); 
// console.log(0 == false);
// console.log(1 == true);
// console.log(null == undefined);
// // 2. potrojne porowanaie sprawdza wartosc i typ "==="
// console.log('===');
// console.log(5 === '5'); 
// console.log(0 === false);
// console.log(1 === true);
// console.log(null === undefined);

// String(1234); // "1234"
// Number("1234"); // 1234
// Boolean(1); // true
// Boolean(0); // false
// Boolean(""); // false
// Boolean("hello"); // true

// test = 10;
// console.log(test);

"use strict"; 
// - wlacza tryb scisly w javascript, wymysza dobre praktyki 
// - nie mozna uzywac niezdaeklarowanych zmiennych
// - nie mozna powielac nazw parametrow w funkcjach
// - pomaga wylapac bledy 


// test  = 10;
// console.log(test);

// wyrazenia warunkowe if else 

// if (cos jest spelnione ) {
//     to wykonaj kod 
// } else {
//     to wykonaj inny kod 
// }

// const age = 40;

// const isDiesel = true;



// if(age >= 18) {
//     console.log("mozesz pic alkohol");
// } else {
//     console.log("nie mozesz pic alkoholu");
// }

// >=, <=, >, <,  ===, , !==

// !== - rozne wartosci albo rozne typy odwrotnosc === 
// != to jest odwrotnosc == // nasze zakazane 

// if(isDiesel !== false) {
//     console.log("te auta nie moga wjechac do centrum krakowa ");
// } else {
//     console.log("mozesz wjechac do centrum krakowa");
// }

// wchodzimy max 2 poziomy 

// const age = 21;

// if(age >18) {
//     console.log("mozesz pic alkohol");
//     if(age === 21) {
//         console.log("mozesz kupic piwo");
        
//     } else {
//         console.log("nie mozesz kupic piwa");
//         if(age > 21) {
//             console.log("mozesz kupic wino");
//         }
//     }
// } else {
//     console.log("nie mozesz pic alkoholu");
// }


// przyklad z if else oraz z ternary operator const x = warunek ? (if) : (else)

// const age = 17;

// if(age > 18) {
//     console.log("mozesz pic alkohol");
// } else {
//     console.log("nie mozesz pic alkoholu");
// }

// age > 18 ? console.log('mozesz pic alkohol') : console.log("nie mozesz pic alkoholu");


// const warunek = age >18 (warunek ) ?(if) 'tutaj tekst lub instrukcja jaka chcemy wykonac' :
// (else) 'tutaj tekst lub instrukcja jaka chcemy wykonac gdy warunek ge >18 nie jest spelniony';

const day = 4;

// switch(day) {
//     case 1: console.log('poniedzialek'); break;
//     case 2: console.log('wtorek'); break;
//     case 3: console.log('sroda'); break;
//     case 4: console.log('czwartek'); break;
//     case 5: console.log('piatek'); break;
//     case 6: console.log('sobota'); break;
//     case 7: console.log('niedziela'); break;
//     default: console.log('nie ma takiego dnia');
// }

// || - or
// && - and

//Z listy obiektów produktów wybierz tylko te dostępne (inStock: true) i tańsze niż 50. Zwróć same nazwy.
// uzywamy najpierw filter -> wewnatrz filer warunek && warunek nastepnie mozemy zrobic map

// filter(el => {
//     return el.inStock === true && el.price < 50;
// })

// const items = [
//   { name: "Zeszyt", price: 12, inStock: true },
//   { name: "Pióro", price: 58, inStock: true },
//   { name: "Ołówek", price: 3, inStock: false },
// ];
// Treść: Do cen netto dodaj VAT 23% i zwróć listę cen brutto jako string do UI, oddzielony „ | ”.
// Użyj: map, join.

// const result = items
//   .filter((el) => {
//     return el.inStock === true && el.price < 50;
//   })

// const names = result.map(el => {
//     return el.name
// });

// const namesString = names.join('');

// console.log(namesString)

// //uproszczona wersja 

// const uproszczonawersja = items
//   .filter((el) => {
//     return el.inStock === true && el.price < 50
//   })
//   .map((el) => {
//     return el.name
//   })
//   .join('');


// // const net = [10, 25, 100]; [12.32zl, 30.75zł, 123zł] join -> "12.30 zł | 30.75 zł | 123.00 zł"
// // // "12.30 zł | 30.75 zł | 123.00 zł"
//  const net = [10, 25, 100];

//  const brutton = net.map(el => {
//     return `${el * 1.23} zł`
//  }).join(' | ')

//  console.log(brutton)

// for(let i = 0; i <= 10; i++) 
// for(inicjalizacja zmiennej; warunek dzialania tej petli - sprawdzany przed kazda interac; zmiana- aktualizacja zmiennej po kazdej iteracji)


// 1 machniecie kolem i = i +1 // i++ //2 
// 2 machniecie kolem let i = 2 -> warunku ( sprawdzamy czy jest <=10) -> i++ do 2 dodajemy 1
// 3 machniecie kolem let i = 3 -> warunku ( sprawdzamy czy jest <=10) -> i++ do 3 dodajemy 1
// ...
// 10 machniecie kolem let i = 10 -> warunku ( sprawdzamy czy jest <=10) -> i++ do 10 dodajemy 1
// 11 machniecie kolem let i = 11 -> warunku ( sprawdzamy czy jest <=10) -> warunek nie jest spelniony petla sie konczy

// for(let i = 1; i <=10;i++)\

// let i = 1 /1
// let i2 = i +1; /2 
// let i3 = i2 +1;/3 

for(let i = 1; i <= 11; i++) {
    console.log(i);
}


// i+=2 === i = i +2
// i++ === i = i +1
// i+-3 === i = i +3
// i+=1 === i = i +1

// i-=2 === i = i -2
// i-- === i = i -1
// i-=3 === i = i -3
// i-=1 === i = i -1

for(let i = 2; i <= 20; i+=2) {
    console.log(i);
}


// obliczanie sumy 

let suma = 0;
for(let i =1; i<=100; i++) {
    suma += i; // suma = suma + i
}

// console.log(suma)

for(let i =1; i<=10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}
