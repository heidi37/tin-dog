// Create the Dog class here

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml(){
        return `
        <div class="profile-img">
          <img src="${this.avatar}" alt="${this.name}" />
        </div>
        <div class="profile-text">
          <h1>${this.name}, ${this.age}</h1>
          <p>${this.bio}</p>
        </div>
        `
    }
    getLikeHtml(){
        if(!this.hasBeenSwiped){
            this.hasBeenSwiped = true;
            this.hasBeenLiked = true;
            return `
            <div class="profile-like">
            <img src="images/badge-like.png" alt="like badge" />
            </div>`
        }
    }
    getNopeHtml(){
        if(!this.hasBeenSwiped){
            this.hasBeenSwiped = true;
        return `
        <div class="profile-like">
        <img src="images/badge-nope.png" alt="nope badge" />
        </div>`
        }
    }
}

export default Dog
