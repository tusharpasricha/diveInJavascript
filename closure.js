
// function a() {
//     var b = 10;
//     c();
//     function c() {
//       console.log(b); // 10
//     }
//   }
//   a();

  //A closure occurs in JavaScript when a function is defined within another function, and the inner function has access to the variables of the outer (enclosing) function, even after the outer function has finished executing. In your code:
 
//   function outer(x){
//     function inner(y){
//       console.log(x+y);
//     }
//     return inner;
//   }

//   const example = outer(5); 
// example(4);

function x(){
  for(var i=0;i<=5;i++){
    setTimeout(()=>{
      console.log(i)
    },i*100)
  }
}
x();