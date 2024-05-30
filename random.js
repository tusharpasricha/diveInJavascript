// function App(){
//     const GITHUB_API = "https://api.github.com/users/tusharpasricha"
//     const [data,setData] = useState('');
//     useEffect(()=>{
//         const response =()=>{
//             fetch(GITHUB_API)
//         }
//         response.then((data)=>{
//             console.log(data)
//         })
//     },[])
//     return(<>
//     <h1>Data</h1>

//     </>)
// }




// var a = [1,4,5,6];
// a[0]

// //for each --> higher order function

// a.forEach(function(val){
//     val > 2 ?console.log(val):null;
// })

// console.log(a);



// (function(){
//     var a = b = 5

// })();

// console.log(typeof(a)); //undefined
// console.log(typeof(b)); //number 

// function foo(){
//     return {
//         name : 'tushar'
//     }
// }

// console.log(foo());

// console.log(1 + + "2" + "2");
// console.log(1 + -"1" +  "2");

// console.log("A" - "B" +"2");

// var a = 0;

// function b(){
//     a = 10;
//     return;
//     var a = function(){

//     }
// }
// b();
// console.log(a); //hoisting 

// var a = 0;

// function b(){
//     a = 10;
//     return;
//     a = function(){}
// }
// b();
// console.log(a); //hoisting 

// var a = 0;

// function b(){
//     a = 10;
   
//     var a;
// }
// b();
// console.log(a); //hoisting 

// console.log({}=={})

// function test(){
//     // function foo(){
//     //     return 100;
//     // }
//     return foo();

//     function foo(){
//         return 10;
//     }  
// }
// console.log(test());

// let task = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('done')
//     },2000)
// })

// task.finally(()=>{
// console.log("fgvrj")
// }).then((data)=>{
// console.log(data)
// },).catch((err)=>{
//     console.log("err"+err);
// })

// let data = [3,1,7,12,23,45]
// data.sort((a,b)=>{
//     return a-b
// });
// console.log(data);

//closure

// function outerFunction(){
//     var a=10;
//     function innerFunction(){
//         return a;
//     }
//     return innerFunction;
// }

// var inner = outerFunction();
// console.log(inner);
// console.warn(inner);
// console.dir(inner);

//prototype extra property

Array.prototype.extraproperty = "high"

const arr = [1,2,3,4];
for(var i in arr){
    console.log(arr[i]);
}
for(var i in arr){
    if(arr.hasOwnProperty(i)){
        console.log(arr[i]); 
    }
    
}