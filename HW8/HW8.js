// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let text1 = document.getElementById(`content`);
console.log(text1)
// -- отримує текст з блоку з id "rules"
let text2 = document.getElementById(`rules`)
console.log(text2)
// -- замініть текст параграфа з id 'content' на будь-який інший
 text1.innerText = `Pop Christmas Songs Playlist   Ariana Grande, Justin Bieber, Mariah Carey Christmas Songs  2021`
// -- замініть текст параграфа з id 'rules' на будь-який інший
text2.innerText = `Merry Christmas and let's have a great year to come!`
// -- змініть кожному елементу колір фону на червоний
    let text3 = document.getElementsByTagName("ul")
console.log(text3)
for (const item of text3) {
    console.log(item)
    item.style.backgroundColor = `red`
    item.style.color = `blue`
}
 text1.style.backgroundColor = `red`
 text2.style.backgroundColor = `red`

// -- змініть кожному елементу колір тексту на синій
text1.style.color = `blue`
text2.style.color = `blue`
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let text4 = document.getElementById(`rules`)
console.log(text4)
let classname = text4.className
console.log(classname)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let text5 = document.getElementsByClassName(`fc_rules`)
for (const text of text5) {
    text.style.color = `white`
}
// PS я щось завдання не так зрозумів і тому поміняв трохи по іншому кольори, але суть ніби та сама