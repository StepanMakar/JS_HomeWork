// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let task1 = document.createElement(`div`);
task1.innerText = `Task1`;
let form1 = document.createElement(`form`);
let input1 = document.createElement(`input`);
input1.setAttribute(`type`, `text`);
input1.setAttribute(`name`, `name`);
let input2 = document.createElement(`input`);
input2.setAttribute(`type`, `number`);
input2.setAttribute(`name`, `age`);
let button1 = document.createElement(`button`);
button1.innerText = `Apply`;

document.body.appendChild(task1);
task1.append(form1);
form1.append(input1, input2,button1);

button1.onclick = function () {

    let name = input1.value;
    let age = input2.value;
    localStorage.setItem(`user`, JSON.stringify({name, age}) );
}
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let task2 = document.createElement(`div`)
task2.innerText = `Task2`
let form2 = document.createElement(`form`)
let input_model = document.createElement(`input`)
input_model.setAttribute(`name`, `model`)
input_model.setAttribute(`type`, `text`)
let input_type = document.createElement(`input`)
input_type.setAttribute(`name`, `type`)
input_type.setAttribute(`type`, `text`)
let input_volume = document.createElement(`input`)
input_volume.setAttribute(`name`, `volume`)
input_volume.setAttribute(`type`, `number`)
let button2 = document.createElement(`button`)
button2.innerText = `Apply`

document.body.append(task2,form2);
form2.append(input_model, input_type, input_volume,button2);
 form2.onsubmit = function (e){
    e.preventDefault()
     let model = this.model.value;
     let type = this.type.value;
     let volume = this.volume.value;
     let car = {model,type,volume};
     console.log(car);
     let cars = JSON.parse(localStorage.getItem(`cars`));
     if(!cars) {
         cars = []
         cars.push(car)
         localStorage.setItem(`cars`, JSON.stringify(cars))
     }
     else {
         cars.push(car)
         localStorage.setItem(`cars`, JSON.stringify(cars))
     }
 };