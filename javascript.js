/* let a = ['sahar', 'milk', 'sol', 'apple'];

let b = a.map(function(element){
    console.log(element);
    return element + 'hello';
});
   console.log(b); */
/* let e = [true, false];

let c = [1, 2, 3, 4,5];
console.log(c);

let a = ['holod', 'jara'];
console.log(a);

let b = []
for (let i = 0; i < 5; i++){
    b.push(c[i]);
}
for (let i = 0; i < 2; i++){
    b.push(a[i]);
}
for (let i = 0; i < 2; i++){
    b.push(e[i]);
}
console.log(b);
 */




/* let a = []
for (let i = 1; i < 101; i++){
    a.push(i);
   
}
console.log(a);
 
let b = []
b = a.filter((i)=>{

return i % 2 == 0
})
console.log(b.reverse())

let m = []
m = a.filter((i)=>{
    return i % 2 == 1
    
})
let c = []
for (i = a.length; i > 0; i--){
    c.push(i);
    
}
console.log(c) */



/* for (let i = 0; i < a.length;  i++){
    console.log(a[i])
}

for (let i = 1; i < 6; i++){
    a.push(i);
}
 console.log(a)

 function button(){
     a.push('hello');
     alert('hello')
     console.log(a)
 }
 
 function delet(){
     a.shift();
     console.log(a)
 } */

 /* let m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 m.map((i, j)=>{
     if (i % 2 == 0){
        console.log('четный', i);
     }
    else if (i % 2 == 1){
        console.log('нечетный', i);
     }
        
 });
  */
 

/*  function funlconcat(a, b) {
   let c = []
    for (let i = 0; i < 4; i++){
       c.push(a[i]);
    }
    for (let i = 0; i < 4; i++){   
        c.push(b[i]);
     }
    return c;
  };

  let a = [1, 2, 3, 4]
  let b = [5, 6, 7, 8]
  let apple = funlconcat (a, b)
  console.log(apple) */

  /* let a 
  if (a){
      console.log(a)
  } */

 /*  let Ulan = {
      name: 'Ulan',
      surname: 'Razakov',
      growth: 170,
      age: 21,
  }
  let Anuar = {
      name: 'Anuar',
      surname: 'Ashirov',
      growth: 175,
      age: 20,
  }
  let Meerim = {
      name: 'Meerim',
      surname: 'Ryskulbekova',
      growth: 160,
      age: 17,
  }

  let person = []
  person.push(Anuar, Ulan, Meerim)
  for (let i = 0; i < 3; i++){

    console.log(person[i].age);
    
    if (person[i].age > 18){
        person[i].atd = true
    }
    else{
        person[i].atd = false
    }
    console.log(person[i].atd)
  }*/
   



// let arr = [
//     {
//     name: 'samsung',
//     price: 200,
//     madeIn: 'korea',
//     color: 'red',
//     kamera: 12
// },
// {
//     name: 'iphone',
//     price: 900,
//     madeIn: 'USA',
//     camera: 20,
//     color: 'black'
// },
// {
//     name: 'motorola',
//     price: 250,
//     madeIn: 'japan',
//     camera: 15,
//     color: 'pink'
// },
// {
//     name: 'sony',
//     price: 300,
//     madeIn: 'japan',
//     camera: 13,
//     color: 'white'
// },
// {
//     name: 'redmi',
//     price: 100,
//     madeIn: 'china',
//     camera: 17,
//     color: 'black'
// }
// ]

// console.log(arr)

// for (let i = 0; i < arr.length; i++){
//     arr[0].sale = 20
//     arr[1].sale = 30
//     arr[2].sale = 40
//     arr[3].sale = 80
//     arr[4].sale = 70

// }


// DOM Elements
console.log(document.getElementById('text'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('h3'))
console.log(document.querySelector('#text'))
console.log(document.querySelectorAll('.item'))
console.log(document.querySelectorAll('h3'))

let x = document.querySelector('#i')

console.log(x.value)

let les = document.querySelectorAll('h1')
console.log(les)
les.forEach(function(a, b){
    console.log(a)
    a.textContent = 'life is good';
    a.innerHTML = '<h2 style = "color: red;"> from js </h2>'
})


let dob = document.querySelector('ul')


console.log(dob)


for (let i = 0; i < 10; i++){
   if (i % 2 == 0){
       dob.insertAdjacentHTML('beforeBegin', '<li style = "list-style-type: circle;">Это чет</li>')
   }
   else{
    dob.insertAdjacentHTML('beforeBegin', '<li style = "list-style-type: square;">Это нечет</li>')
   }
}

let sait = document.querySelector('a')
console.log(sait)
sait.getAttribute('href')
sait.setAttribute('href', 'https:\\yandex.ru')
sait.textContent = 'ссылка на яндекс'




let car = document.querySelector('.ford')
console.log(car)
car.getAttribute('src')
car.setAttribute('src', 'img/mers.jpg')
let textCar = document.querySelectorAll('h4')
textCar.forEach(function(m, b){
    m.textContent = 'Mercedes-Benz — торговая марка и одноимённая компания — производитель легковых автомобилей премиального класса, грузовых автомобилей, автобусов и других транспортных средств, входящая в состав немецкого концерна «Daimler AG». Является одним из самых узнаваемых автомобильных брендов во всём мире.'
    console.log(m)
})

let car2 = document.querySelector('.left')
car2.insertAdjacentHTML('beforeend', '<img class="bmw" src="img/bmw.jpg" alt="">')
console.log(car2)

let p = document.querySelector('p')
p.classList.add('box')

let span = document.querySelector('span')
span.classList.remove('box')
span.classList.add('box2')

let t = p.classList.contains('box')
let t2 = span.classList.contains('box2')

if(p.classList.contains('box')){
    p.classList.remove('box')
    p.classList.add('box2')
}
if (span.classList.contains('box2')){
    span.classList.remove('box2')
    span.classList.add('box')
}

p.addEventListener('click', function(){
    p.style.color = 'blue'
})
    


let div = document.querySelector('.btn')
let ch = Number('0')

div.addEventListener('click', function(){
    let text = div.textContent
    ch++
    div.textContent = String(ch)

console.log(ch)
    
})



let Ulan = {
    name: 'ulan'
}
let Anuar = {
    name: 'anuar'
}

function sayName(){
    console.log(this.name)
}
let name = 'meka'
sayName()

Ulan.fun = sayName
Anuar.fun = sayName
Anuar.fun()
Ulan.fun()

let block = document.querySelector('.block')
let arr = [...block.children]

console.log(arr)
block.addEventListener('click', function(e){
    arr.forEach((item) => {
        item.classList.remove('red')
    })

    e.target.classList.add('red')
   
    console.log(block.children)
    console.log(e)
    
})




        
    
