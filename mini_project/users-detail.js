let url = new URL(location.href)
let id_post = url.searchParams.get(`id`)
fetch(`https://jsonplaceholder.typicode.com/users/` + id_post)
    .then(value => value.json())
    .then(value => {

        const loop = obj => {
            let html = `<ul>`;
            for(let item of Object.entries(obj)) {
                if(typeof item[1] === 'object') {
                    html += `<li><h4><ins>${item[0]}</ins></h4>${loop(item[1])}</li>`;
                    continue;
                }
                html += `<li>${item[0]}: ${item[1]}</li>`;
            }
            html += `</ul>`;
            return html;
        };
        let main_block = document.createElement(`div`)
        main_block.classList.add(`main_block`)
        let user_info = document.createElement(`div`)
        user_info.classList.add(`user_info`)
        document.body.append(main_block)
        main_block.append(user_info)
        user_info.insertAdjacentHTML('beforeEnd', loop(value));



fetch(`https://jsonplaceholder.typicode.com/users/${id_post}/posts`)
    .then(post => post.json())
    .then(post => {
        let button = document.createElement(`button`)
        user_info.append(button)
        button.innerText = `Post of current user`
   button.onclick = function (){
       let main_tittle =  document.createElement(`div`)
       main_tittle.classList.add(`main_tittle`)
       for (const posts of post) {

           let title = document.createElement(`div`)
           title.classList.add(`title`)
           let button_tittle = document.createElement(`button`)
           button_tittle.innerText = `Show post details`


           title.innerHTML = `<h3>Title: ${posts.title}</h3>`
           main_block.append(main_tittle)
           main_tittle.append(title)
           title.append(button_tittle)

           button_tittle.onclick = () => {
               location.href = `post-details.html?id=` + posts.id
           }



       }
       button.disabled = true
   }

    })})
