// Remember to import the data and Dog class!

import dogs from './data.js'
import Dog from "./Dog.js"


const rex = new Dog(dogs[0])
const bella = new Dog(dogs[1])
const teddy = new Dog(dogs[2])
console.log(rex)

const dogDiv = document.getElementById('dog-div')
dogDiv.innerHTML += rex.getDogHtml()
dogDiv.innerHTML += bella.getDogHtml()
dogDiv.innerHTML += teddy.getDogHtml()
