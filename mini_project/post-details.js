let url = new URL(location.href)
let id_post = url.searchParams.get(`id`)
fetch(`https://jsonplaceholder.typicode.com/posts/` + id_post)
    .then(value => value.json())
    .then(value => {
        console.log(value)
        let main = document.createElement(`div`)
        main.classList.add(`main`)
        let post_info = document.createElement(`div`)
        post_info.classList.add(`post_info`)
        let button = document.createElement(`button`)
        button.innerText = `Show post comments`
        post_info.innerHTML = `
        <h3>User Id: ${value.userId} </h3>
        <h2>ID: ${value.id}</h2>
        <h4>Titile: ${value.title}</h4>
        <h5>Info: ${value.body}</h5>
        `

        document.body.append(main)
        main.append(post_info)
        post_info.append(button)

        let main_post = document.createElement(`div`)
        main_post.classList.add(`main_post`)
        main.append(main_post)


        button.onclick = () =>{
            fetch(`https://jsonplaceholder.typicode.com/posts/${id_post}/comments`)
                .then(item => item.json())
                .then(item => {
                    for (const itemElement of item) {
                        let comments_block = document.createElement(`div`)
                        comments_block.classList.add(`comments_block`)
                        main_post.append(comments_block)

                        comments_block.innerHTML = `
                        <h2>PostId: ${itemElement.postId}</h2>
                        <h3>ID: ${itemElement.id}</h3>
                        <h4>Name: ${itemElement.name}</h4>
                        <h5>Email: ${itemElement.email}</h5>
                        <h6>Info: ${itemElement.body}</h6>
                        `


                    }
                    button.disabled = true
                })

        }

    })