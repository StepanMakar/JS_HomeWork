fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        let users_main_div = document.createElement(`div`)
        users_main_div.classList.add(`main`)
        for (const users of value) {
            let users_div = document.createElement(`div`)
            users_div.classList.add(`users`)
            let button = document.createElement(`button`)
            button.innerText = `Details`
            users_div.innerHTML = `
            <h2>ID: ${users.id} </h2>
            <h3>Name: ${users.name} </h3>
            `
            document.body.append(users_main_div)
            users_main_div.append(users_div)
            users_div.append(button)
            button.onclick = function (){
                location.href = `users-detail.html?id=` + users.id
            }

        }

    })