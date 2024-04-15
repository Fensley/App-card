const elem = document.querySelectorAll(".one-name")

elem.forEach((each)=>{
    each.addEventListener("click" , ()=>{
       each.classList.toggle("toggle")  
    })
})