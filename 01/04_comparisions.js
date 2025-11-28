// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);
// console.log(2 == 1);

// console.log("2" > "1");
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);




//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(premetive) copy , heap (non-premetive) reference

let myYouTubeName = "codeCrafters";

let anotherYouTubeName = myYouTubeName;
anotherYouTubeName = "NotCodeCrafters"

console.log(myYouTubeName);
console.log(anotherYouTubeName);


let user1 = {
    email: "swapnilcodes28@gmail.com",
     upi: "swapnil@upi"
}

let user2 = user1;
user2.email = "hitash@gmail.com"

console.log(user1.email);
console.log(user2.email);
