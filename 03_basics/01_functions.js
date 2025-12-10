
function sayMyName (){
    console.log("s");
    console.log("w");
    console.log("a");
    console.log("p");
    console.log("n");
    console.log("i");
    console.log("l"); 
}
// sayMyName()

// function addTeoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }


function addTeoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    // console.log("swapnil");
    return number1 + number2
    
}
const result = addTeoNumbers(3, 5)
// console.log("result: ", result);

function loggInUserMessage(userName = "sam"){
    if(!userName){
        console.log("please enter a user name.");
        return        
    }
//  return `${userName} just logged in.`   
    
}
// console.log(loggInUserMessage("swapnil"))
// console.log(loggInUserMessage());

function calculateCartePrice(...num1) {
    return num1
}
// console.log(calculateCartePrice(200, 300, 400));

const user = {
    username: "swapnil",
    price: 199
}
function handleObject (anyobject){
    console.log(`user name is ${anyobject.username}, and the price is ${anyobject.price}.`);   
}
// handleObject(user)
handleObject({
    username:"sam",
    price:299
})


const myNewArry = [1111,2222,3333,4444]
function returnSecondValue(getarry) {
    return [getarry]
}
console.log(returnSecondValue(myNewArry));
