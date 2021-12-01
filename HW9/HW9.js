
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block = document.createElement(`div`)
block.classList.add(`wrap`, `collapse`, `alpha`, `beta`)
document.body.appendChild(block)
block.style.backgroundColor = `blue`
block.style.width = `400px`
block.style.height = `400px`
block.style.margin = `50px`
let block_clone = block.cloneNode(true)
document.body.appendChild(block_clone)
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let ul_container = document.getElementsByClassName(`menu`)[0]
let array = ['Main','Products','About us','Contacts']
for (const string of array) {
    let element_li = document.createElement(`li`)
    element_li.textContent = `${string}`

    ul_container.appendChild(element_li)
}
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let all_course = document.createElement(`div`)
 document.body.appendChild(all_course)
all_course.classList.add(`courses`)
all_course.style.border =`5px solid black`
all_course.style.margin = `10px`
let course_container = document.getElementsByClassName(`courses`)[0]
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    let course_block = document.createElement(`div`)
    course_block.classList.add(`course_element`)
    let text_course = document.createElement(`p`)
    text_course.textContent = `Course: ${course.title} - Duration: ${course.monthDuration}`


    course_container.appendChild(course_block)
    course_block.appendChild(text_course)
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let course2 = document.createElement(`div`)
course2.classList.add(`course2`)
document.body.appendChild(course2)
course2.style.border =`5px solid black`
for (const course of coursesAndDurationArray) {
    let course_element = document.createElement(`div`)
    course_element.classList.add(`item`)
let element_h2 = document.createElement(`h2`)
    element_h2.classList.add(`heading`)
    element_h2.textContent = `Course: ${course.title}`
    let element_p = document.createElement(`p`)
    element_p.classList.add(`description`)
    element_p.textContent = `Duration: ${course.monthDuration} month`

    document.getElementsByClassName(`course2`)[0].appendChild(course_element)
    course_element.appendChild(element_h2)
    course_element.appendChild(element_p)

}