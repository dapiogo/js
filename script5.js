// Spread i Destrukturyzacja w tablicach
// spread(...nazwaTablicy) - rozwija pozwala rozbic tablice na pojedyncze elementy
// destrukturyzacja - pozwala wyciagnac pojedyncze elementy z tablicy

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// console.log(...arr)
// const newTab = [...arr, ...arr2];
// console.log(newTab);

// const copy = [...arr];
// console.log(copy);
// const objec = [{ name: 'Jan', age: 30 }, { name: 'Anna', age: 25 }];
// const object2 = [{ name: 'Kasia', age: 28 }, { name: 'Marek', age: 35 }];

// const newObj = [...objec, ...object2];
// console.log(newObj);

// const fruits = ['apple', 'banana', 'orange', 'kiwi'];
// const [pierwszy, drugi, ...x] = fruits;
// console.log(pierwszy);
// console.log(drugi);
// console.log(x);

// const numbers = [10, 20, 30, 40, 50];
// const [,, trzeciElement] = numbers;
// console.log(trzeciElement);

// LocalStorage i SessionStorage
// localStorage - przechowuje dane bezterminowo
// sessionStorage - przechowuje dane do zamkniecia karty lub przegladarki

// setItem - dodaje dane
// getItem - pobiera dane
// removeItem - usuwa dane
// clear - usuwa wszystkie dane
// localStorage.setItem('name', 'XXXX');
// localStorage.setItem('a', 1);
// localStorage.setItem('b', '2');
// const getLocalStorage = localStorage.getItem('name');
// console.log(getLocalStorage);
// localStorage.removeItem('name');
// localStorage.clear();
// JSON.stringify - ta metoda zamienia wszystko na string i zawsze jej uzywamy w localhsorage 
// jesli mamy inne dane niz jeden string i liczba

// JSON.parse - ta metoda zamienia stringa z powrotem na obiekt lub tablice
// localStorage.setItem('items', JSON.stringify([{
//     title: 'item1', price: 100
// },{
//     title: 'item2', price: 200
// },{
//     title: 'item3', price: 300
// }]));

// const items = JSON.parse(localStorage.getItem('items'));
// console.log(items)
// sessionStorage.setItem('age', 30);

// // 1. zapisz w localstorage swoje imie, pobierz je i wyswietl w konsoli
// // 2. zapisz w localstorage tablice 3 ulubionych filmow (obiekty z kluczami title i year)
// // 3. pobierz tablice z localstorage i wyswietl w konsoli tytuly tych filmow
// // 4. zapisz w sessionstorage swoj wiek, pobierz go i wyswietl w konsoli
// document.cookie = "username=John Doe";

// const addToCartBtn = document.querySelector(".add-to-cart");

// addToCartBtn.addEventListener('click', () => {
//     const cartItems = document.querySelectorAll('.cart li');
//     const itemsNames = [];

//     let total = 0;
//     cartItems.forEach(item => {
//         total += Number(item.dataset.price);
//     });
//     console.log(total);
// });

// const API = 'https://jsonplaceholder.typicode.com/users';
// const endpoint = "getUsers";

// function getData() {
//     return fetch(API).then(res => res.json());
// }

// fetch(API).then(async(res) => {
//     const data = await res.json();
//     // return data;
//     console.log(data);  
// })

// fetch(URL,options )
// url - endpoint - adres do ktorego wysylamy zapytanie
// options - obiekt z ustawieniami zapytania {methods,body}
// // metoda - GET, POST, PUT, DELETE
// GET - pobieranie danych, TYPOWY KOD: 200,304,NIE WYSYLAMY W BODY ZADNYCH DANYCH
// POST -utworzenie nowych danych,zmiana stanu tych danych, TYPOWY KOD: 201, WYSYLAMY DANE W BODY
// // PUT - aktualizacja danych, TYPOWY KOD: 200, WYSYLAMY DANE W BODY
// DELETE - usuniecie danych, TYPOWY KOD: 204, NIE WYSYLAMY W BODY ZADNYCH DANYCH

// body - tutaj wysylamy nasze dane i to ma byc string ( wyslanie naszych danych do backendu)
// headers - naglowki, tutaj m.in. ustawiamy typ danych ktore wysylamy
// headders: {
//     'Content-Type': 'application/json'

// }
// headers : {
//     'Content-Type': ''
// }

// fetch(API,
//     method: 'POST',
//     body: JSON.stringify({ name: 'John', age: 30 }),
// })


const ui = {
    list: document.querySelector('.list'),
    createBtn: document.querySelector('.createBtn')
}

console.log(ui.createBtn)


const API = 'https://68ce9b796dc3f350777f7d8c.mockapi.io/posts/posts'

//dodawanie elementow (POST)
ui.createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    const newPost = {
        title,
        body
    };

    fetch(API,{
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async res => {
        console.log(res)
        if(res.ok) {
         const result = await   fetchPosts();
            console.log(result)
        }
    })
});



//usuwanie elementow 
function handleDelete(id) {
    fetch(`${API}/${id}`, {
        method: 'DELETE'
    }).then(async res => {
        console.log(res)
        if(res.ok) {
         const result = await   fetchPosts();

            //to jest dodatkowo zeby pokazac jak dziala api - > w normalniej aplikacji tak nie robimy
            // const card = document.querySelector(`.deleteBtn`).closest('.card');
            // card.remove();
        }
    });
}



//Pobieranie danych z API i wyswietlanie na stronie GET 
function fetchPosts() {
   fetch(API).then(async(res) => {
        const data = await res.json();
        return data;
        
    }).then(elementy => {
       elementy.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('card');
        li.innerHTML = `<strong class="title">${el.title}</strong>
                        <p class="body">${el.body}</p>
                        <div class="row">
                            <button class="danger deleteBtn">Usuń</button>
                            <span class="id muted">ID: ${el.id}</span>
                        </div>
                        `;

        const deleteBtn = li.querySelector('.deleteBtn');

        deleteBtn.addEventListener('click', () => handleDelete(el.id));
        ui.list.appendChild(li);
       });
    })

}

// usuwanie elementu z listy (DELETE)





fetchPosts();


        
