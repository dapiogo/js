// Suma liczb podzielnych (1-100 podzielne przez 3 )

// let suma = 0;

// for (let i =1; i <=100; i++) {
//     if(i % 3===0) {
//         suma = suma + i;
//     } 
// }
// console.log(suma);

// //suma liczb podzielny i nie podzielnych przez 2 (1-150)

// let sumaLiczbPodzielnych = 0;
// let sumaLiczbNiePodzielnych = 0;

// for(let i =1; i <=150; i++) {
//     if(i % 2 === 0) {
//         sumaLiczbPodzielnych  = sumaLiczbPodzielnych + i;
//     } else {
//         sumaLiczbNiePodzielnych = sumaLiczbNiePodzielnych + i;
//     }
// }
// console.log({sumaLiczbPodzielnych});
// console.log({sumaLiczbNiePodzielnych});

// //suma licz podizelnych przez 5 or 7 (1-200) 

// let suma = 0;

// for (let i =1; i <=200; i++) {
//     if(i % 5 === 0 || i % 7 === 0) {
//         suma = suma + i;
//     }
// }

// for(let i =1; i <=200; i++)  {
//     if(i % 5 ===0) {
//         suma = suma + i;
//     } else if (i % 7 ===0) {
//         suma = suma + i;
//     }
// }


// const tekst = "Programowanie";
// console.log(tekst.length)
// let odwroconyTekst = "";

// for(let i = tekst.length - 1; i >= 0; i--) {
//     console.log(tekst[i] ,i);
//     odwroconyTekst = odwroconyTekst + tekst[i];
//     // console.log(odwroconyTekst,i);
    
// }

// console.log(tekst.split('').reverse().join(''))


// // console.log(tekst.length);
// console.log(odwroconyTekst);
// console.log("czesc");
// console.log("czesc");

//Prosta funkcja bez paramaetrow
// function sayHello() {
//     console.log("Hello");
// }
// sayHello();

// function greet(name) {
//     console.log(`Hello, ${name}`);
// }

// greet("Alice");
// greet("Bob");
// greet("Charlie");

// function obliczMianownik(val1,val2) {
//     return val1 + val2;
// } 

// function add(a, b,c,d,e,f,g,h) {
//     const sum = a + h;
//     const result =  sum / obliczMianownik(e, f);
//     console.log(result)
// }

// add(2,3,4,5,6,7,8,9);

// function add(a,b) {
//     return a +b;
// }

// const sum = add(5,10);
// console.log(sum);

// const sum = function (a,b) {
//     return a + b;
// }

// rownoznaczne 
// // function add(a,b) {
// //     return a +b;
// // }    

// function subtract(val1,val2) {
//     return val1 - val2;
// }

// function result(a,b,c,d) {
//     const sum = add(a,b);
//     const difference = subtract(c,d);
//     return sum * difference;
// }


// console.log(result(5,3,10,4));

// function sum(number1,number2) {
//     return number1 + number2;
// }


// //arrow function - wersja skrocona funkcji 
// const sum = (number1,number2) =>  number1 + number2;

// //arrow function - wersja rozwinieta funkcji
// const sum2 = (number1,number2) => {
//   return   number1 + number2;
// }

// function add(a = 30,b = 20,c = 10) {
//     return a + b + c;
// }

// const firma1 = add(1);
// const firma2 = add(1,2);
// const firma3 = add();

// //destrukturyzacja obiektow w parametrach funkcji
// function add2({a =10,b = 20,c = 10}) {
//     return a + b + c;
// }

// const firma4 = add2({b:4,a:2,c:2});

// console.log(firma1);
// console.log(firma2);
// console.log(firma3);
// console.log(firma4);

//----callback functions
// function add(a,b) {
//     return a + b;
// }

// function subtract(a,b) {
//     return a - b;
// }

// // funkcja przyjmujaca inna funkcje jako parametr - callback
// function result(a,b,fn) {
//     return fn(a,b);
// }

// console.log(result(10,5,add));
// console.log(result(10,5,subtract));

// function sum(array) {
//     let total = 0;
//     for(let i = 0; i < array.length; i++) {
//         total += array[i];
//     }
//     return total;
// }

// console.log(sum([]))

// zrob funkcje ktora sprawdza ktora liczba jest parzysta a ktora nie patrzysta

// function parzyste() ; -> true / false
// function nieparzyste(); -> true / false
// liczba % 2 === 0 -> parzysta
// liczba % 2 !== 0 -> nieparzysta



// Zapisz funkcję, która dodaje „zł” po liczbie i formatuje ją do dwóch miejsc po przecinku 
// value.toFixed(2).(FUNKCJA MA JEDEN PARAMETR)
// 1. Zamiana stopni Celsjusza na Fahrenheita FUNKCJA PRZYJMUJE JEDEN PARAMETR
// 2. Policz pole prostokąta (DWA PARAMETRY)
//* DODAJ PRODUKT DO KOSZYKA add('jabklo') -> (jeden parametr) *(trzeba uzyc tablicy i 
// odpowiedniej metody wrzucajacej parametr do tablicy potem return)

// const koszyk = 'aaa'

// function add(produkt) { 
//     const koszyk = []
//     return koszyk
// }

// function koszyk(tab,value) {
//     console.log(tab,value)
//     let tabela = tab.push(value);
//     console.log(`test ${tabela}`);
//     return tab;

// };
// let owoce = ['banan', 'gruszka'];

// console.log(koszyk(['banan', 'gruszka'], 'jablko'));

// DOM - Document Object Model
// - struktura dokumentu html
// - kazdy element html to obiekt w js
// - mozemy manipulowac tymi elementami za pomoca js
// - reaghowa na zdarzenia (eventy) - klikniecie, najechanie myszka, scrollowanie itp
// - tworzyc nowe i usuwac stare elementy html 

// console.log(document)
//wybieranie elementow z DOM 
// getElementById - wybiera element po id
// getElementsByClassName - wybiera elementy po klasie (zwraca HTMLCollection)
// getElementsByTagName - wybiera elementy po nazwie tagu (zwraca HTMLCollection)
// querySelector - wybiera pierwszy element pasujacy do selektora CSS
// querySelectorAll - wybiera wszystkie elementy pasujace do selektora CSS (zwraca NodeList)

// const box = document.getElementById('box');
// console.log(box);
// const firstLi = document.querySelector('.list li');
// console.log(firstLi);
// const allLi = document.querySelectorAll('.list li');

// // querySelector
// // jesli w html jest id -> to uzywamy # w querySelector
// // jesli w html jest class -> to uzywamy . w querySelector
// console.log(allLi);

// const test = document.querySelector('.list li');


// const divs = document.getElementsByTagName('div');
// const divsQS = document.querySelectorAll('div');
// console.log(divs);
// console.log(divsQS);

// console.log(test);

//Tekst i HTML w elemencie

const getParagraph = document.querySelector('#message');
console.log(getParagraph);
//textContent -> zmiana czystego tekstu w elemencie
getParagraph.textContent = 'Nowa wiadomosc';
//innerHTML -> zmiana tekstu i HTML w elemencie
getParagraph.innerHTML = '<div><ul><li>nowytekst</li></ul></div>';

//Atrybuty, wartosci pol i dane
const input = document.querySelector('#name');
const inputName = input.value;
console.log(inputName);

const photo = document.querySelector('.photo')
console.log(photo)
photo.setAttribute('alt', 'Nowy opis zdjecia');

const title = document.querySelector('#title');
console.log(title.dataset.test);
console.log(title.dataset.id);

//klasy i style 

const alert = document.querySelector('#alert');
console.log(alert)
// alert.classList.remove('hidden');
// alert.classList.add('error');
// alert.classList.toggle('error');

//zdarzenia poczatek

const btn = document.querySelector('.btn');


function handleClick() {
    console.log('Kliknieto przycisk');
    btn.textContent = 'Nowa wiadomosc';
}

btn.addEventListener('click', handleClick);
