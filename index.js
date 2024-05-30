const GITHUB_API = "http://api.github.com/users/tusharpasricha";
const user = fetch(GITHUB_API);
console.log("Pending state of the Promise"+user);
// user.then((data)=>{
//     console.log(data);
//     const response = data.json();
//     response.then(data=>{
//         console.log(data);
//         console.log(JSON.stringify(data));
//     })
// })
user.then(async (data)=>{
    const response = await data.json();
    console.log(JSON.stringify(response));
})