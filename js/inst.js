const hamburger = document.querySelector(".header_hamburger");
const fullscrmenu = document.querySelector(".fullscrmenu");
const exitbtn = document.querySelector(".exitmark");


hamburger.addEventListener ("click", function (){

    fullscrmenu.style.display ="flex";
    fullscrmenu.style.zIndex = "100";
    hamburger.style.zIndex = "1";
   
});

exitbtn.addEventListener ("click", function (){
    
        fullscrmenu.style.display ="none";
        fullscrmenu.style.zIndex = "1";
        hamburger.style.zIndex = "100";
       
});