// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(value => {
        console.log(value)
        let main = document.createElement(`div`)
        main.classList.add(`main`)
        for (const element of value) {
           let post = document.createElement(`div`)
            post.classList.add(`post`)
            post.innerHTML = `
             <div class="id"> ID - ${element.id}</div> 
             <div class="title"> Title - ${element.title}</div>
             <div class="info"> Info - ${element.body}</div>
`


            document.body.append(main)
            main.append(post)
        }
})

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(card=> card.json())
.then(card => {
    console.log(card)
    let main2 = document.createElement(`div`)
    main2.classList.add(`main2`)

    for (const item of card) {
        let post2 = document.createElement(`div`)
        post2.classList.add(`post2`)
        post2.innerHTML = `
        <h3>${item.id}</h3>
        <h5>${item.name}</h5>
        <h4>${item.email}</h4>
        <p>${item.body}</p>
        
        `

        document.body.append(main2)
        main2.append(post2)
    }
})