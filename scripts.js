// let – zmienna o zasięgu blokowym, można zmieniać wartość.
// const – stała referencja (nie można przypisać nowej wartości do tej samej nazwy).
// var – zasięg funkcyjny (dziś raczej nie używamy).
// Nazewnictwo: camelCase, bez spacji/PL-znaków.


// console.log("Hello, World!"); // Wyświetla tekst w konsoli przeglądarki.

// let name; 
// const year = 2025;
// name = "Dawid";

// let surname = "XYZ";

// let test = null // wartość pusta, brak wartości

// console.log(name, surname);

// // program do dodawania uzytkownika do zmiennej

// let userName; 
// let age;
// let isAdmin;

// userName = prompt("Podaj imię:"); // Pobiera dane od użytkownika.
// age = prompt("Podaj wiek:");
// isAdmin = confirm("Czy jesteś administratorem?");

// console.log("Nazwa użytkownika:", userName + ", wiek:", age + ", admin:", isAdmin);



// {
//     let name = "Dawid";
//     console.log(name,'w bloku'); // Działa, bo name jest w zasięgu.
// }

// let zmienna = "test"; ma zasieg blokowy

// console.log(name ,'poza blokiem'); // Błąd, bo name jest poza zasięgiem.


//  let items = 3;  
//  let count = 5;


// let summary = items * count; // Dodawanie liczb.

// 1. zmienna items(przedmioty) = 3, name = 'Ola' , price(cena za jeden przedmiot) = 15.5
// policzyc przedmioty * cena za jeden przedmiot i w console log wypisac ze ola kupila X(summary) 
// przedmiotow 
//2. Zadeklaruj trzy zmienne: imię, wiek, miasto, a następnie połącz je w jeden tekst.
//3.Oblicz sumę i różnicę dwóch liczb zapisanych w zmiennych.

// const example = `Użytkownik ${items} ma ${count} lat i mieszka w mieście ${items*count}.`;
// console.log(example);

// 2) typy danych 

// typeof - > sprawdza typ danych
// String - tekst, liczby w cudzysłowie
// Number - liczby
// Boolean - true/false
// null - brak wartości
// undefined - zmienna zadeklarowana ale bez wartości
// Object - obiekt\


// //number
// const age = 30; // Number
// const pi = 3.14; // Number
// const testNumber = -5; // Number
// console.log(typeof age, typeof pi, typeof testNumber , 'numbers');

// //string
// const name = "Dawid"; 
// const name2 = 'Piotr';
// const name3 = `Ann ${age}`;
// console.log(typeof name, typeof name2, typeof name3, 'string');

// //bollean
// const isAdmin = true;
// const isUser = false;
// console.log(typeof isAdmin, typeof isUser, 'boolean');

// //null
// const emptyValue = null;
// console.log(typeof emptyValue, 'null');

// //undefined
// let uninitializedValue = undefined;
// console.log(typeof uninitializedValue, 'undefined');


// const name = 'Dawid';

// obiekty 
// const form = {
//     name: "Dawid"
//     age: 30,
//     isAdmin: true
// };
// form.age = 31; //zmiana wartosci w obiekcie
// form.surname = "Gola";

// console.log(form);

// const person = {};

// person.name = "Anna";
// person.age = 25;

// console.log(person);


// const form3 = {
//     user1: {
//         name: "Dawid",
//         age: 30,
//         isAdmin: true
//     },
//     user2: {
//         name: "Anna",
//         age: 25,
//         isAdmin: false,
//         finances: {
//             salary: 5000,
//             bonus: 1000,
//         }
//     }
// };

// console.log(JSON.stringify(form3));
// console.log(JSON.parse(JSON.stringify(form3)));


// console.log(form, 'form', form.age);

// console.log(typeof user, 'object');


// const summarry = 10/0 + undefined;
// console.log(summarry, 'summary');


/// array
// tablica ma indeksy/zaczyna sie od 0
const colors = ["red", "green", "blue", 5, true, null, undefined, {name: "Jakub",age:20},[1,[2,4,{id: 1}],3]]; //tablica
// console.log(colors, 'array');
// console.log(colors[0],'to jest moj pierwszy item')
console.log(colors[2]);
console.log(colors[7].name);
console.log(colors[8][1][2].id);
console.log(colors.length,'dlugosc tablicy'); //dlugosc tablicy


//Number to konwersja stringa na number
// const testNumber = "1234";

// const obj = {name: "test"};
// // const obj = "test"
// obj.name = "changed";
// console.log(Number(testNumber),testNumber, 'string to number');


//String konwersja number na string
// const data = 123;

// console.log(String(data),data, 'number to string');

/// Boolean konwersja na boolean
//  false(0) true (1) 

// console.log(Boolean("a"), 'number to boolean');

// if(number !== 0 ) {
//     console.log('urochom program');
// }


// 1/ Utwórz zmienną logiczną i wypisz jej wartość w konsoli.
// Utwórz zmienną bez wartości i sprawdź jej typ. 
// Stwórz tablicę liczb i wypisz jej długość oraz typ.
// Stwórz obiekt car ktory ma marke rocznik i model wewnatrz nawiasow klamrowych (wlasciwosci, klucze)
// oraz dodaj do niego nowa wartosc boolean isElectric: false.
const arr = [1,3,4,5,6,3,1, {name: "test", age: 20}, null, undefined,[1,2,3,{key:1}]];
// 1 - wypisz dlugosc tablicy
// 2 - wypisz typ tablicy
// 3 - wypisz wartosc age obiektu 
// 4 - wypisz mi dlugosc zagniezdzonej tablicy
// 5 - wypisz wartosc key z zagniezdzonego obiektu


//metody na tabliach 
// - dodawania/ usuwanie elementow (konca tablicy) push('jakis element')/pop()
// - dodawanie / usuwanie elementow (poczatku tablicy) unshift('jakis element')/shift()

const fruits = ["apple", "banana", "orange"];
// console.log(fruits, 'poczatkowa wartosc tablicy');

// //dodawanie na koncu tablicy
// fruits.push({name: "kiwi"});
// console.log(fruits, 'po dodaniu na koncu tablicy');
// fruits.pop();
// console.log(fruits, 'po usunieciu z konca tablicy');

// //dodawanie na poczatku tablicy
// fruits.unshift("strawberry");
// console.log(fruits, 'po dodaniu na poczatku tablicy');
// fruits.shift();
// console.log(fruits, 'po usunieciu z poczatku tablicy');

// const names = ["Ola","Kasia","Jan"];

// splice - > metoda do usuwania i dodawania elementow w tablicy

// const arr4 = [10, 20, 30, 40];
// const removed = arr4.splice(0,2, 100 ,200); // usuwa 2 elementy od indeksu 0 i dodaje 100,200
// console.log(arr4);
// console.log(arr4, 'po usunieciu elementu');
// console.log(removed, 'usunięty element');

// //slice - > metoda do tworzenia nowej tablicy na podstawie istniejacej
// const arr5 = [10, 20, 30, 40, 50];
// const newArr = arr5.slice(1,3);
// console.log(newArr, 'nowa tablica');


const wyplata = [3000, 4000, 5000, 6000];

const wyplatawEuro = wyplata.map(el => {
    return `${el * 4.5} Euro`;
})

// console.log(wyplatawEuro);
const numbers = [1,2,3,4,5,6];
const parzyste = numbers.filter(el => {
    return el >3;
})

console.log(parzyste, 'parzyste');


