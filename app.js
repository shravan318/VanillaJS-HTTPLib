const http = new easyHTTP;

// get posts

// http.get('https://jsonplaceholder.typicode.com/posts' , function (err,posts){
//     if(err){
//         console.log(err)
        
//     }else {
        
//         console.log(posts)
//     }
// })


//post request

const data ={
    title : "Custom pst",
    body: "this is a custom post"
}

// http.post('https://jsonplaceholder.typicode.com/posts' , data, function (err, post){
//     if(err){
//                 console.log(err)
                
//             }else {
                
//                 console.log(post)
//             }
// })



//PUT request 
// http.put('https://jsonplaceholder.typicode.com/posts/1' , data, function (err, post){
//     if(err){
//                 console.log(err)
                
//             }else {
                
//                 console.log(post)
//             }
// })



// get posts

http.delete('https://jsonplaceholder.typicode.com/posts/1' , function (err,response){
    if(err){
        console.log(err)
        d
    }else {
        
        console.log(response)
    }
})
