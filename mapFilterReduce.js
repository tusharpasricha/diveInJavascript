
const names = ["tushar","aman","sam"];


const filteredName = names.filter((i)=>{
    return i.length == 3;
})
console.log(filteredName);

names.map((i)=>{
    console.log(i)
});




const numbers = [1,2,3,5,4];

const sum = numbers.reduce((accumulator,i)=>{
    return accumulator + i
},0)

console.log(sum);

numbers.forEach(number =>{
    console.log(number)
})

const sortedNumbers = numbers.sort();
console.log(sortedNumbers)