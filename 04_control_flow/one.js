//if 

const isUserLoggedIn = true
const tempreture = 41

if (tempreture === 40){
    console.log("less then 50");
}else{
    console.log("greater then 50");
    
}

//<,>,<=,>=,==,===,!=,!==

const score = 200 

if(score > 100){
    const power = "fly"
    console.log(`user power is: ${power}`);
    
}

const balance = 1000

if (balance < 500) {
    console.log("less then 500");
}else if(balance < 750){
    console.log("less then 750");
}else{
    console.log("less then 1200");   
}


const UserLoggedIn = true
const debitCard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");   
}

if (loggedInFromEmail || loggedInFromGoggle) {
    console.log("user logged in");
    
}