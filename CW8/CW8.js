// 1) Напишіть код, який :
// a) змінює клас тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let block_main = document.getElementById(`main_header`)
block_main.classList.add(`sep-2021`)
// b) робить шириниу елементу ul 400px
let block1 = document.getElementsByTagName(`ul`);
for (const block1Element of block1) {
    block1Element.style.width = `400px`
}
;

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let block2 = document.getElementsByClassName(`linkList`);
for (const block2Element of block2) {
    block2Element.style.width = `50%`
}
;
// d) отримує текст який зберігається в елементі з класом listElement2
let element_le2 = document.querySelector(`.listElement2`)
console.log(element_le2)
text_le2 = element_le2.textContent
console.log(text_le2)
// e) отримує всі елементи li та змінює ім колір фону на сірий
let element_li = document.getElementsByTagName(`li`);
for (const itemli of element_li) {
    itemli.style.backgroundColor = `grey`
}
;
// f) отримує всі елементи 'a' та додає їм клас anchor
let element_a = document.getElementsByTagName(`a`);
for (const item_a of element_a) {
    item_a.classList.add(`anchor`)
}
;
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let element_ag = document.querySelectorAll(`a`);
for (const item_ag of element_ag) {
    if (item_ag.textContent === `link3`) {
        item_ag.style.fontSize = `40px`
    }
}
;
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const item_ag of element_ag) {
    item_ag.classList.add(`element_` + item_ag.textContent)
}
;
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let element_sh = document.getElementsByClassName(`sub-header`)
console.log(element_sh)
for (let i = 0; i < element_sh.length; i++) {
    const elementSh = element_sh[i];
    elementSh.style.backgroundColor = prompt(`Вкажіть колір сегмента ${i + 1} (blue, green, gray, yellow...)`)
}
;
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let element_j = document.querySelectorAll(`.sub-header`)
for (const elementJElement of element_j) {
    if (elementJElement.textContent === `content 2 segment`) {
        elementJElement.style.color =  prompt('Вкажіть колір тексту')
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let element_c1 = document.getElementsByClassName(`content_1`)
for (const elementC1Element of element_c1) {
    elementC1Element.textContent = prompt(`Введіть текст для відображеня`)
}
// l) отримати елементи p та змінити їм padding на 20px
let element_p = document.getElementsByTagName(`p`)
for (const elementPElement of element_p) {
    elementPElement.style.padding = `20px`
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let element_t2 = document.querySelectorAll(`.text2`)
for (const elementT2Element of element_t2) {
    elementT2Element.innerText = `sep-2021`
}
