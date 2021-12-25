// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(value => value.json())
.then(value => {
    console.log(value)
    let main = document.createElement(`div`)
    document.body.append(main)
    main.classList.add(`main`)
    for (const item of value) {
        let card = document.createElement(`div`)
        card.classList.add(`card`)
        card.innerHTML =
        `<h3> ID: - ${item.id}</h3>
        <h4> Tittle: - ${item.title}</h4>
        <h6> Body: - ${item.body}</h6>`
        main.append(card)



        let button = document.createElement(`button`)
        button.innerText = `show comment`
        card.append(button)


        button.addEventListener("click", function () {
            fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
                .then(value => value.json())
                .then(value => {
                    for (const coms of value) {
                        let coment = document.createElement(`div`)
                        coment.classList.add(`coment`)
                        coment.innerHTML = ` <h3>ID: ${coms.id}</h3>
                                        <h4>Name: ${coms.name}</h4>
                                        <h5>Email: ${coms.email}</h5>
                                        <h6>Body: ${coms.body}</h6>`

                        card.append(coment)
                    }

                })


        })

    }
})