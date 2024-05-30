function fetchDataWithCallback(username,callback){
    const url = `https://api.github.com/users/${username}`;
    fetch(url).then((response)=>{
        if(response.ok){
            return response.json();
        }
        else{
            throw Error;
        }
    }).then((data)=>{
        callback(null,data);
    }).catch(error=>{
        callback(error,null);
    })
}

fetchDataWithCallback('tusharpasricha',function(error,data){
    if(error){
        console.log('Callbacl error',error);
    }
    else{
        console.log('CallBack Data', data);
    }
})