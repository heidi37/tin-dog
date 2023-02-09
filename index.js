// Remember to import the data and Dog class!

import dogs from './data.js'
import Dog from "./Dog.js"


let dogProfile;

const appBody = document.querySelector('.app-body')
const nopeButton = document.querySelector('#nope')
const likeButton = document.querySelector('#like')

const renderDogProfile = function(){
    if(dogs.length > 0) {
        nopeButton.disabled = false
        likeButton.disabled = false
        dogProfile = new Dog(dogs.shift())
        appBody.innerHTML = dogProfile.getDogHtml()
        console.log(dogProfile)
    } else {
        appBody.innerHTML = `
        <div class="end-profiles">
        <h2>End of Profiles</h2>
        <p>You have viewed all the available profiles. New profiles are added frequently.</p>
        <p>Come back soon!😉</p>
        </div>
        `
        nopeButton.style.display = "none";
        likeButton.style.display = "none";
    }
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

    // appBody.innerHTML = ''
    // renderDogProfile()
    setTimeout(function (){
        renderDogProfile()
    }, 1000)
}
