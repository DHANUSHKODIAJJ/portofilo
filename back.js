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
        skillsBox.style.transform="skew(25deg)";
    }
})


//eduction image change//

function changeImage(getimg,para){
    const img=document.getElementById("img");
    const dgvcPara = document.getElementById("dgpara");
    const drbccPara =document.getElementById("dbpara");
    const school =document.getElementById("schpara");
    img.src=getimg;
    if(para=="Iam currently pursuing an MSc in computer Science (2023-2025)"){
        dgvcPara.textContent=para;
    }
    else if(para=="I finished my BSc Computer Science at Hindu College (2020-2023)"){
        drbccPara.textContent=para;
    }
    else if(para=="I completed my studies in GKM school"){
        school.textContent=para;
    }    
}

document.getElementById("dgvc").addEventListener("click",function(){
    const a="Iam currently pursuing an MSc in computer Science (2023-2025)";
    changeImage("gallery/clg1.jpeg",a);
    
})
document.getElementById("drbcc").addEventListener("click",function(){
    const b ="I finished my BSc Computer Science at Hindu College (2020-2023)";
    changeImage("gallery/drbcc.webp",b);
})
document.getElementById("sch").addEventListener("click",function(){
    const c ="I completed my studies in GKM school";
    changeImage("gallery/sch.png",c);
})

