// Remember to import the data and Dog class!

import dogs from './data.js'
import Dog from "./Dog.js"


let dogProfile = new Dog(dogs[0])

const appBody = document.querySelector('.app-body')
const nopeButton = document.querySelector('#nope')
const likeButton = document.querySelector('#like')

const renderDogProfile = function(){
    appBody.innerHTML = dogProfile.getDogHtml()
}

renderDogProfile()

nopeButton.addEventListener("click", function(){
    appBody.innerHTML += dogProfile.getNopeHtml()
    disableButtons()
})

likeButton.addEventListener("click", function(){
    appBody.innerHTML += dogProfile.getLikeHtml()
    disableButtons()
})

const disableButtons = function(){
    nopeButton.disabled = true
    likeButton.disabled = true
    console.log(dogs)
    dogs.shift()
    console.log(dogs)
    appBody.innerHTML = ''
    setTimeout(function (){
        renderDogProfile()
    }, 1000)
}
