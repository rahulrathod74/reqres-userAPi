let container=document.getElementById("container")
        let btn=document.getElementById("btn")
        btn.addEventListener("click",function(){
          
          
         let respon=fetch('https://reqres.in/api/users?page=2')
         respon.then(data=>data.json()).then(data=>displayData(data.data)) 
      })
      function displayData(data){
        data.map((ele)=>{
            let div=document.createElement("div")
            let name=document.createElement("h2")
            name.innerText=ele.first_name
            let email=document.createElement("h3")
            email.innerText=ele.email
            let avtar=document.createElement("img")
            avtar.src=ele.avatar
            div.append(name,email,avtar)
            container.append(div)
        })
      }