const user = {
    username: "swpanil",
    price: 999,

    wellcomemessage: function(){
        console.log(`${this.username}, wellcome to the website`);
        console.log(this);
        
    }
}
// user.wellcomemessage()
// user.username = "sam"
// user.wellcomemessage()


// function chai() {
//     let username = "swapnil"
//     console.log(this);
    
// }
// chai()

// const chai =  () => {
//      let username = "swapnil"
//     console.log(this);
// }


// const addtwo = (num1, num2) => num1 + num2

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "swapnil"})

console.log(addtwo(3, 4))

const myArry = [2,3,4,5,6,7,]

myArry.forEach(() => {})
