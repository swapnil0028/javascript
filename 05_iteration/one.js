//for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
   // console.log("7 if the best number");
            
    }
    //console.log(element);
    
}
// console.log(element);  the elemwnt doesnt exesiste out


for (let i = 1; i <= 10; i++) {
   // console.log(`Outer loop values ${i}`);
   
    for (let j = 1; j <= 10; j++) {
    //    console.log(`Outer loop values ${j} and inner loop ${i}`);
    //  console.log(i + '*' + j + ' = ' + i*j );
        
    }
   
}

//we made a table from 1 to 10


let myArray = ["superman", "batman", "spiderman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5 ) {
//         console.log("Detected the element 5");
//         break;
        
//     }
//     console.log(`value of index is ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5 ) {
        console.log("Detected the element 5");
        continue;
        
    }
    console.log(`value of index is ${index}`);
    
}