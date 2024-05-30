function fetchDataWithPromise(username){
    const url  =`https://api.github.com/users/${username}`
    return new Promise((resolve,reject)=>{
        fetch(url).then(response=>{
            resolve(response.json());
        }).catch(err=>{
            reject(err);
        })
    })
}

fetchDataWithPromise('tusharpasricha').then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
})