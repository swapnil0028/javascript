const emailId = ""

if (emailId) {
    console.log("got user mail");
}else{
    console.log("don't have user mail");
}

// falely value
// false
//""
// 0
// -0
// BigInt on
// null
// undefined
// NaN


// trutly value 
// "0"
// 'flase'
// " "
// {}
// []
// function(){}


if (emailId.length === 0) {
    console.log("arry is empty");
}

const emptyobj = {}

if (Object.keys(emptyobj).length===0) {
    console.log("arry is empty......");
    
}



let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15 
val1 = null ?? 10 ?? 20


console.log(val1);

// turnari operatutr
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");

