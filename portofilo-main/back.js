// HIREME  BUTTON EVENT//
var hereme=document.getElementById("herme")
var pop=document.querySelector(".popup")
var closebtn=document.getElementById("exit")

hereme.addEventListener("click",function(){
       pop.style.marginLeft="0%"
})
closebtn.addEventListener("click",function(){
    pop.style.marginLeft="-200%"
})

//sidenav option//
var navclose=document.getElementById("closesidenav")
var sidenav=document.querySelector(".sidenav")
var optionbtm=document.getElementById("bar")

optionbtm.addEventListener("click",function(){
    sidenav.style.marginLeft="0%"
})
navclose.addEventListener("click",function(){
    sidenav.style.marginLeft="-300%"
})

//scroll animation about...//
const word=document.querySelector(".c21")
window.addEventListener("scroll",function(){
    var winhigh=window.innerHeight
    var boxtop=word.getBoundingClientRect().top
    if(boxtop<winhigh){
        word.style.opacity="1"
    }
    else{
        word.style.opacity="0"
    
    }
})

//skills animation //
const skillsBox=document.getElementById("sec3");
window.addEventListener("scroll",function(){
    const win=window.innerHeight
    const top=skillsBox.getBoundingClientRect().top
    if(top<win){
        skillsBox.style.transform="skew(0deg)";
    }
    else{
        skillsBox.style.transform="translate(20px,20px)";
    }
})


//eduction animation//

const eduBox=document.querySelectorAll(".eduCard")
window.addEventListener("scroll",()=>{
    const windowhight=window.innerHeight;
    eduBox.forEach(eduBox => {
        const eduBOXTOP=eduBox.getBoundingClientRect().top
        if(eduBOXTOP<windowhight){
            eduBox.style.transform="translateY(-20px)";
            eduBox.style.opacity="1";
            
        }
        else{
            eduBox.style.transform="translateY(200px)"
            eduBox.style.opacity="0.5";
        }
    });
   
});




