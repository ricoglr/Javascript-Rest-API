
const newPost = {
    
    userId: 1,
    title: "YENİ BAŞLIK",
    body: "MERHABA LOREM MERHABA !!"
}

document.querySelector("button").addEventListener('click', ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "post",
        body: JSON.stringify(newPost),
        headers : {"Content-type" : "application/json"}
    })
        .then(response =>response.json())
        .then(json =>{
            console.log(json);
        }) 
        .catch(err => console.log(err))
    })

 // Kendi kaynağınızdan veri çekme
/*
document.querySelector("button").addEventListener('click', ()=>{
    fetch("poem.txt")
        .then(response =>response.text())
        .then(text =>{
            console.log(text);
        }) 
        .catch(err => console.log(err))
    })*/