const myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'rouby',
    swift: 'swift for apple'
}

for (const key in myobject) {
//    console.log(`${key} shortcut is for ${myobject[key]}`);
   
}

const programmning = ["sdf", "asfd", "werf", "argfv"]
for (const key in programmning) {
    // console.log(programmning[key]);
    
    
}



const map = new Map()
map.set('JP','JAPAN')
map.set('IN','INDIA')
map.set('FR','FRANCE')

map.set('JP','JAPAN')

for (const key in map) {
   
    console.log(key);
    
}



//for each loop (most commanly and highly used for)

const coding = ["awed", "rerfe", "srsgs", "srfgsg", "sergsd"]

coding.forEach( function  (val) {
    //console.log(val);
    
} )

coding.forEach( (item) => {
    //console.log(item);          arrow function
    
} )

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)


coding.forEach( (item, index, arr)=>{
    // console.log(item, index, arr);
    
} )


const mycoding = [
    {
        languageName: "javascript",
        languageFile: "js",
        language: "english"
    },
    {
        languageName: "pyhton",
        languageFile: "py",
        language: "english"
    },
    {
        languageName: "c++",
        languageFile: "cpp",
        language: "english"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFile);
    console.log(item.language);
    
})