// Create the Dog class here

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml(){
        return `
        <div>
        <div>${this.name}</div>
        <div>${this.avatar}</div>
        <div>${this.age}</div>
        <div>${this.bio}</div>
        <div>${this.hasBeenSwiped}</div>
        <div>${this.hasBeenLiked}</div>
        </div>
        `
    }
}

export default Dog
