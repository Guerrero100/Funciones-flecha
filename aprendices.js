
const aprendi = [

    ["Luis",10000,787878,55555,40], 
    ["Paola", 232323, 44444, 1111, 20],
    ["pato",222222, 787878, 55555, 50],
    ["altamira",33333, 999999, 55555, 18],
    ["busquet",777777, 666666, 55555, 42]

];


const apren = (pos)=>{
    
    for (let index= 0; index < aprendi.length; index++) {
        console.log(aprendi[index][pos]);
        
        
    }
    
}


module.exports = {apren}; 