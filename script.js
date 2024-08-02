// []()
// []()
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
// 5. Выведите содержимое тега title в консоль.
// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
// 7. Создайте тег, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// 8. Удалите тег h6 на странице.


//.1 задание
const linkEl = document.querySelector('#super_link');
console.log(linkEl);


//.2 задание
const cardsEl = document.querySelectorAll('.card-link');
cardsEl.forEach(Element=> {
    Element.textContent='ссылка';
});

//.3 задание
const cardBody = document.querySelector('.card-body');
const linkEll2 = cardBody.querySelectorAll('.card-link');
console.log(linkEll2);

//.4 задание
const DataEl = document.querySelector('[data-number="50"]');
console.log(DataEl);


//.5 задание
const titleEl = document.querySelector('title');
console.log(titleEl.textContent);


//.6 задание
const cardTitleEl = document.querySelector('.card-title');
console.log(cardTitleEl.parentElement);


//.7 задание
const pEl = document.createElement('p');
pEl.textContent = "Привет";
const cardEl3 = document.querySelector('.card');
cardEl3.prepend(pEl);

//.8 задание
const hEl = document.querySelector('h6');
hEl.remove();

