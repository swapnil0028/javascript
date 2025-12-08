//objects

// const tinderUser = new Object()//singleton object
const tinderUser = {}//non singleton object

tinderUser.id = "123abc"
tinderUser.name = "swapnil"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "swapnil@gmail.com",
    fullName:{
        userFullName:{
            firstName: "swapnil",
            lastNmae:  "Gaikwad"
        }
    }
}
// console.log(regularUser.fullName.userFullName.lastNmae);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);



const users = [
    {
    id: 1,
    email:"swapnil12@gmial.com"
    },  
        {
    id: 1,
    email:"swapnil12@gmial.com"
    },    
        {
    id: 1,
    email:"swapnil12@gmial.com"
    },
]
// console.log(users[0].id);



const course = {
    courseNmae: "js in hindi",
    price: 999,
    courseinstructor: "swapnil" 
}
// course.courseinstructor

const {courseinstructor: instructor} = course
console.log(instructor);


// {
//     "neme": "swapnil",
//     "coursename": "js",
//     "price": 999
// }