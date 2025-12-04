//singleton object


// object littrels 

const mysym= Symbol("key1")

const jsuser ={
    name: "swapnil",
    age: 18,
    [mysym]: Symbol("key1"),
    location: "chandrapur",
    email: "swapnilcodes28@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "saturday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log([mysym]);


// symbol
const practicsOfSymbol = ("this the symbol I guess")

let obj = {
[practicsOfSymbol]: Symbol("this is the value of symbol")
}
// console.log(obj[practicsOfSymbol]);
// console.log(obj[typeof practicsOfSymbol]);


// changing objects value and freeze
jsuser.email = "s9703118@gmal.com"
// Object.freeze(jsuser)
jsuser.email = "swapnilcodes28@gmail.com"
// console.log(jsuser["email"]);


jsuser.greeting = function(){
    console.log("hello js users.");
    
}
jsuser.greetingtwo = function(){
    console.log(`hello js users, ${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
