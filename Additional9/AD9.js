// - Є масив :
//     Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

    let usersList = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
                geo: {
                    lat: '-43.9509',
                    lng: '-34.4618'
                }
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains'
            }
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            address: {
                street: 'Douglas Extension',
                suite: 'Suite 847',
                city: 'McKenziehaven',
                zipcode: '59590-4157',
                geo: {
                    lat: '-68.6102',
                    lng: '-47.0653'
                }
            },
            phone: '1-463-123-4447',
            website: 'ramiro.info',
            company: {
                name: 'Romaguera-Jacobson',
                catchPhrase: 'Face to face bifurcated interface',
                bs: 'e-enable strategic applications'
            }
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            address: {
                street: 'Hoeger Mall',
                suite: 'Apt. 692',
                city: 'South Elvis',
                zipcode: '53919-4257',
                geo: {
                    lat: '29.4572',
                    lng: '-164.2990'
                }
            },
            phone: '493-170-9623 x156',
            website: 'kale.biz',
            company: {
                name: 'Robel-Corkery',
                catchPhrase: 'Multi-tiered zero tolerance productivity',
                bs: 'transition cutting-edge web services'
            }
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            address: {
                street: 'Skiles Walks',
                suite: 'Suite 351',
                city: 'Roscoeview',
                zipcode: '33263',
                geo: {
                    lat: '-31.8129',
                    lng: '62.5342'
                }
            },
            phone: '(254)954-1289',
            website: 'demarco.info',
            company: {
                name: 'Keebler LLC',
                catchPhrase: 'User-centric fault-tolerant solution',
                bs: 'revolutionize end-to-end systems'
            }
        },
        {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            address: {
                street: 'Norberto Crossing',
                suite: 'Apt. 950',
                city: 'South Christy',
                zipcode: '23505-1337',
                geo: {
                    lat: '-71.4197',
                    lng: '71.7478'
                }
            },
            phone: '1-477-935-8478 x6430',
            website: 'ola.org',
            company: {
                name: 'Considine-Lockman',
                catchPhrase: 'Synchronised bottom-line interface',
                bs: 'e-enable innovative applications'
            }
        },
        {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            address: {
                street: 'Rex Trail',
                suite: 'Suite 280',
                city: 'Howemouth',
                zipcode: '58804-1099',
                geo: {
                    lat: '24.8918',
                    lng: '21.8984'
                }
            },
            phone: '210.067.6132',
            website: 'elvis.io',
            company: {
                name: 'Johns Group',
                catchPhrase: 'Configurable multimedia task-force',
                bs: 'generate enterprise e-tailers'
            }
        },
        {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            address: {
                street: 'Ellsworth Summit',
                suite: 'Suite 729',
                city: 'Aliyaview',
                zipcode: '45169',
                geo: {
                    lat: '-14.3990',
                    lng: '-120.7677'
                }
            },
            phone: '586.493.6943 x140',
            website: 'jacynthe.com',
            company: {
                name: 'Abernathy Group',
                catchPhrase: 'Implemented secondary concept',
                bs: 'e-enable extensible e-tailers'
            }
        },
        {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            address: {
                street: 'Dayna Park',
                suite: 'Suite 449',
                city: 'Bartholomebury',
                zipcode: '76495-3109',
                geo: {
                    lat: '24.6463',
                    lng: '-168.8889'
                }
            },
            phone: '(775)976-6794 x41206',
            website: 'conrad.com',
            company: {
                name: 'Yost and Sons',
                catchPhrase: 'Switchable contextually-based project',
                bs: 'aggregate real-time technologies'
            }
        },
        {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            address: {
                street: 'Kattie Turnpike',
                suite: 'Suite 198',
                city: 'Lebsackbury',
                zipcode: '31428-2261',
                geo: {
                    lat: '-38.2386',
                    lng: '57.2232'
                }
            },
            phone: '024-648-3804',
            website: 'ambrose.net',
            company: {
                name: 'Hoeger LLC',
                catchPhrase: 'Centralized empowering task-force',
                bs: 'target end-to-end models'
            }
        }
    ];
let main_block = document.createElement(`div`)
main_block.classList.add(`main`)

main_block_contain = document.getElementsByClassName(`main`)
for (const element of usersList) {
    let element_block = document.createElement(`div`)
    element_block.classList.add(`element_block`)
    let head_block = document.createElement(`div`)
    head_block.classList.add(`head`)
    let id = document.createElement(`div`)
    id.textContent = element.id
    let name = document.createElement(`div`)
    name.textContent = element.name
    let user_name = document.createElement(`div`)
    user_name.textContent = `User Name: ${element.username}`
    let email = document.createElement(`div`)
    email.textContent = `Email: ${element.email}`
    let block_adress = document.createElement(`div`)
    let text_address = document.createElement(`p`)
    text_address.textContent = `Address:`
    let ul = document.createElement(`ul`)
    ul.classList.add(`ul`)
    let object_address = element.address
    let array_values = Object.entries(object_address).slice(0,-1)


    for (const item of array_values) {
        let li = document.createElement(`li`)
        li.textContent = `${item}`

        ul.appendChild(li)

    }
    let block_geo = document.createElement(`div`)
    let text_geo = document.createElement(`p`)
    text_geo.textContent = `Geolocation`
    let geo_ul = document.createElement(`ul`)
    geo_ul.classList.add(`ul`)
    let geo_object = element.address.geo
    let geo_arr = Object.entries(geo_object)
    for (const item of geo_arr) {
        let li = document.createElement(`li`)
        li.textContent = `${item}`

        geo_ul.appendChild(li)
    }
let phone = document.createElement(`div`)
    phone.textContent = `Phone number: ${element.phone}`
    let website = document.createElement(`div`)
    website.textContent = `Website: ${element.website}`

    let company_block = document.createElement(`div`)
    let company_text = document.createElement(`p`)
    company_text.textContent = `Company:`
     let company_ul = document.createElement(`ul`)
    company_ul.classList.add(`ul`)
    let arr_company = Object.entries(element.company)
    for (const item of arr_company) {
        let li = document.createElement(`li`)
        li.textContent = `${item}`

        company_ul.appendChild(li)
    }
    document.body.appendChild(main_block)
    main_block.appendChild(element_block)
    element_block.appendChild(head_block)
    head_block.appendChild(id)
    head_block.appendChild(name)
    element_block.appendChild(user_name)
    element_block.appendChild(email)
    element_block.appendChild(block_adress)
    element_block.appendChild(block_geo)
    block_adress.appendChild(text_address)
    block_adress.appendChild(ul)
    block_geo.appendChild(text_geo)
    block_geo.appendChild(geo_ul)
    element_block.appendChild(phone)
    element_block.appendChild(website)
    element_block.appendChild(company_block)
    company_block.appendChild(company_text)
    company_block.appendChild(company_ul)



}