//for of

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "helloWorld!"
for (const greet of greeting) {
    // console.log(greet);
    
}


//maps


const map = new Map()
map.set('JP','JAPAN')
map.set('IN','INDIA')
map.set('FR','FRANCE')

map.set('JP','JAPAN')

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'freefire',
    'game2': 'valorent',
    'game3': 'pubg',
}
for (const [key,values] of myObject) {
    console.log(key,values);
    
}