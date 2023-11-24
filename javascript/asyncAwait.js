function webServerConnect(){
   return fetch('https://jsonplaceholder.typicode.com/posts/1',{
        headers : {
            'Cache-Control' : 'no-cache'
        }
    })
    .then(response => response.json());
}
//await 있으면 무조건 async 써줘야함
async function getJSONData(){
    const result = await webServerConnect();
    console.log(result);
}
getJSONData();