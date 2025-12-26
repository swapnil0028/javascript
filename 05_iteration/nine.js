// ..eight  was. never. created 
// reduse functionality



const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function (acc, curaval) {
//     console.log(`acc${acc}, curval${curaval}`);
    
//     return acc + curaval
// },0 )
const mytotal = myNums.reduce( (acc, curaval) => (acc + curaval) ,0)

console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "python",
        price:2999
    },
    {
        itemName: "data science",
        price:2999
    }
]

const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price ,0)
console.log(pricetopay);





// and with that 9:02 hr's of video lecture of javascript is finally completed 
// there still another 10hr's of lecture pending 
// and its backend and DSA 
// well HOPE this will helpp other's aswell for their recapes 
// byee!!!!!