// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let element1 = document.getElementById(`text`)
let button = document.getElementsByTagName("button")[0]
button.onclick = function (){
    element1.style.display = `none`;
}
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let button2 = document.getElementsByClassName(`task2`)[0]
button2.onclick = function (){
    button2.style.display = `none`;
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let button3 = document.getElementById(`button2`)
 button3.onclick =  function() {
    let age = document.getElementById(`age`).value
     console.log(age)
 if (age >= 18) {
     alert(`Вітаємо вас на нашому сайті`);}
     else if (age < 18 && age > 0) {
         alert(`Поверніться за декілька років `)
     }
      else {alert(`Некоректне введення`)}
 }

// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.querySelector(`.menu`)
let title = document.querySelector(`.title`)
title.onclick = function () {
    menu.classList.toggle(`hide`)
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let list = [
    {name: `Dean Martin`, song: `Let it Snow! Let it Snow! Let it Snow!`},
    {name: `Mariah Carey`, song: `All I Want For Christmas Is You!`},
    {name: `Микола Леонтович`, song: `«Щедрик» (Carol of the Bells)`},
    {name: `Abba`, song: `Happy New Year`},
    {name: `Wham!`, song: `Last Christmas`}
]
 let container = document.createElement(`div`)
document.body.appendChild(container)
for (const element of list) {
    let block = document.createElement(`div`)
    block.classList.add(`Song_block`, `wrap`)
    let performer = document.createElement(`h3`)
    let composition = document.createElement(`p`)
    let btn = document.createElement(`button`)

    performer.textContent = element.name
    composition.innerText = element.song
    btn.innerText = `Close/Open`

    container.append(block)
    block.append(performer, composition, btn)

    btn.onclick = function () {
        block.classList.toggle(`hidden`)
    }


}