// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
for (const user of users) {
    let user_block = document.createElement(`div`)
    user_block.innerText = `${user.name} - ${user.age} - ${user.status}`
    user_block.classList.add(`user_block`)
    let button = document.createElement(`button`)
    button.innerText = `Add to favorite`

    button.onclick = function() {
 let favorite = JSON.parse(localStorage.getItem(`favorite`))
        if (!favorite) {
            favorite = []
            favorite.push(user)
            localStorage.setItem(`favorite`, JSON.stringify(favorite))
        }
else{
            favorite.push(user)
            localStorage.setItem(`favorite`, JSON.stringify(favorite))
        }

    }

    document.body.appendChild(user_block)
    user_block.append(button)
}
let link = document.createElement(`button`)
link.innerText = `Go to favorite`
link.onclick = function() {
    document.location=`favorites.html`
}


document.body.append(link)