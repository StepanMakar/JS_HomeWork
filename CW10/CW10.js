
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let firs_maine = document.createElement(`div`)
let first_container = document.createElement(`div`)
firs_maine.textContent = `Task 1`
first_container.textContent = `First`
let form_one = document.createElement(`form`)
form_one.setAttribute(`name`,`First Form`)
let input_one = document.createElement(`input`)
let input_two = document.createElement(`input`)
let second_container = document.createElement(`div`)
second_container.innerText = `Second`
let form_two = document.createElement(`form`)
form_two.setAttribute(`name`, `Second` )
let input_three = document.createElement(`input`)
let input_four = document.createElement(`input`)

let btn = document.createElement(`button`)
btn.textContent = `Push Me`

btn.addEventListener(`click`, function () {
console.log(input_one.value)
console.log(input_two.value)
console.log(input_three.value)
console.log(input_four.value)
})


document.body.append(firs_maine)
firs_maine.append(first_container)
first_container.append(form_one)
form_one.append(input_one, input_two)
firs_maine.append(second_container)
second_container.append(form_two)
form_two.append(input_three, input_four)
firs_maine.append(btn)

firs_maine.classList.add(`firs_maine`)
form_one.classList.add(`form`)
form_two.classList.add(`form`)


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let container_table = document.createElement(`div`);
container_table.classList.add(`censore_block`)
container_table.textContent = `Task 2 `
let table_line = document.createElement(`input`);
table_line.setAttribute(`type`, `number`);
let table_column = document.createElement(`input`);
table_column.setAttribute(`type`, `number`);
let table_context = document.createElement(`input`);
let table_btn = document.createElement(`button`);
table_btn.textContent = `Create table`;

document.body.append(container_table);
container_table.append(table_line,table_column,table_context,table_btn);

let table = document.createElement(`table`);
let main_table = document.createElement("div");
table.style.border = `2px solid black`;
main_table.appendChild(table);
document.body.appendChild(main_table);

table_btn.addEventListener(`click`, function() {
    let tr = table_line.value;
    let td = table_column.value;
    let table_info = table_context.value;

    function creator(tr, td ,info) {
        for (let i = 0; i < tr; i++) {
            let tr = document.createElement(`tr`);
            tr.style.border = `2px solid black`;
            for (let j = 0; j < td; j++) {
                let td = document.createElement(`td`);
                td.style.border = `2px solid black`;
                td.innerText = `${info}`;
                table.appendChild(tr);
                tr.appendChild(td);
            }
        }
    }
    creator(tr ,td ,table_info);
})


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let censore = [`stupid`, 'idiot', `bitch`, `freak`, `asshole`]
let censore_block = document.createElement(`div`)
censore_block.classList.add(`censore_block`)
censore_block.textContent = `Task 3 (word) `
let censore_input = document.createElement(`input`)
censore_input.setAttribute(`type`, `text`)
let btn2 = document.createElement(`button`)
btn2.textContent = `Let check your decency...)`
btn2.addEventListener(`click`, function () {

    if (censore.includes(censore_input.value)) {
        alert(`Ooops... easely dude!!`);
        censore_input.value = '';
        return;
    }
    if ( (censore.includes(censore_input.value)) === false ) {
        alert (`Its OK...maybe`)
        censore_input.value = ``
    }
    })



document.body.append(censore_block)
censore_block.append(censore_input)
censore_block.append(btn2)


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням. у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let censore_block2 = document.createElement(`div`)
let censore_input2 = document.createElement(`input`)
censore_block2.textContent = `Task 4 (sentence) `
censore_block2.classList.add(`censore_block`)
let btn3 = document.createElement(`button`)
btn3.textContent = `Let check your decency...)`


btn3.addEventListener(`click`, function() {
        let arr_word = (censore_input2.value).split(` `)
    let res = arr_word.filter(item => censore.includes(item))
    if (res.length > 0) {
        alert(`Ooops... easely dude!!`);
        censore_input2.value = ` `;
    }
    else if(res.length === 0) {
        alert (`Its OK...maybe`)
        censore_input2.value = ` `;
    }
})


document.body.append(censore_block2);
censore_block2.append(censore_input2);
censore_block2.append(btn3)

