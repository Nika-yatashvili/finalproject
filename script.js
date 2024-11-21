let burger = document.querySelector(".burger");
let Xmark = document.querySelector(".xmark");
let headerNavMenu = document.querySelector(".headerNav");

burger.addEventListener("click", ()=> {
    headerNavMenu.style.left = "0"
    Xmark.style.display = "block"
    burger.style.display = "none"

   Xmark.addEventListener("click", ()=>{
     headerNavMenu.style.left = "-100%"
     Xmark.style.display = "none"
      burger.style.display = "block"


    
   })


})

