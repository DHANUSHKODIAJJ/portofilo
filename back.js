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
const word=document.querySelector(".c22")
const img2=document.querySelector(".img2")
window.addEventListener("scroll",function(){
    var winhigh=window.innerHeight
    var boxtop=word.getBoundingClientRect().top
    var imgtop=img2.getBoundingClientRect().top
    if(boxtop<winhigh || imgtop<winhigh){
        word.style.opacity="1"
        img2.style.marginLeft="0%"
    }
    else{
        word.style.opacity="0"
        img2.style.marginLeft="-300%"
    }
})