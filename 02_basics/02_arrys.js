const marvel_Heros = ["Ironman", "Spiderman", 'Blackwido']
const DC_Heros = ["superman", "Batman", 'Flash']

// marvel_Heros.push(DC_Heros)

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

// const allHeros = marvel_Heros.concat(DC_Heros)
// console.log(allHeros);

const allHeros = [...marvel_Heros, ...DC_Heros]
// console.log(allHeros);


const anootherArry = [1,2,3,[4,5,6],7,8,9,[11,12,13]]

let arryMethod1 = anootherArry.flat(Infinity)
console.log(arryMethod1);


console.log(Array.isArray("Swapmil"));
console.log(Array.from("Swapnil"));
console.log(Array.from({name :"swapnil"}));//interestng



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
