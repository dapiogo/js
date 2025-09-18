console.log('test');

const getButton = document.querySelector('#demo');
// addEventListener



getButton.addEventListener('click', function() {
    // getDiv.style.backgroundColor = 'red';
    // getDiv.style.color = 'white';
    // getDiv.style.padding = '20px';
    // getDiv.style.textAlign = 'center';
    // getDiv.style.fontSize = '30px';
    // getDiv.style.fontWeight = 'bold';
    // getDiv.style.borderRadius = '10px';
    // getDiv.style.cursor = 'pointer';
    const getSection1 = document.querySelector('.section1');
    const getSection2 = document.querySelector('.section2');
   
    getSection1.style.backgroundColor = 'red';
    getSection2.style.backgroundColor = 'blue';

});

//formularze 

// const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

// const getForm = document.querySelector('#login');
// getForm.addEventListener('submit', function(event) {
//     event.preventDefault(); //zatrzymanie celowe wyslania formularza - poniewaz odswierza strone -> a nie chcemy takiego efektu
//     const form = event.currentTarget;
//     // const email = form.elements.email.value;
//     const email = form.email.value;

//     const sprawdzEmail = isEmail(email);

//     console.log(sprawdzEmail);

//     if(sprawdzEmail) {
//         alert(`Witaj ${email} twoje dane zostaly wyslane do backendu`);
//     } else {
//         alert('Podaj poprawny email');
//     }
// })

//tworzenie wstawianie i ususwanie elementow
const ul = document.querySelector('#tasks');
const li = document.createElement('li');
// 1/ append -> dodaje element na koniec
// 2/ prepend -> dodaje element na poczatek
// 3/ remove -> usuwa element
li.textContent = 'Nowe zadanie';

ul.append(li);
// ul.append(li);
// ul.prepend(li);
// ul.remove(li);

const getButton2 = document.querySelector('#add-task');


getButton2.addEventListener('click', function() {
    const li = document.createElement('li');
    const input = document.querySelector('#new-task');
    console.log(input)
    li.textContent = input.value;
    ul.append(li);
});


const card1 = document.querySelector('.card');
const priceEl = card1.querySelector('.price');

const parent = priceEl.parentElement;

const next = card1.nextElementSibling;
console.log(next);
const prev = card1.previousElementSibling;
console.log(prev);

//zadanie licznik

const btn = document.querySelector('#licznik');
btn.addEventListener('click', function() {
    const counter = document.querySelector('#count');
    const start = Number(counter.textContent);
    counter.textContent = start + 1;
})


//panel ukryj pokaz 

const toggleBtn = document.querySelector('#toggle');

toggleBtn.addEventListener('click', function() {
    const panel = document.querySelector('#panel');
    panel.classList.toggle('hidden');
})
