//all apps open and close//
const spotifyIcon = document.getElementById("spotify")
const spotifyPop = document.querySelector(".playlist")
const noteIcon = document.getElementById("sticky")
const notePop = document.getElementById("notepad")
const gameIcon =document.getElementById("game")
const gamePop = document.getElementById("screen")
const settingIcon =document.getElementById("setting")
const settingPop = document.getElementById("setpop")

function openApp(p){
    if(p.style.display==="none"){
        p.style.display="block";
    }
    else{
        p.style.display="none";
    }
}

function clickIcon(icon,pop){
    icon.addEventListener("click",()=>{
        openApp(pop);

    })
}
clickIcon(spotifyIcon,spotifyPop)
clickIcon(noteIcon,notePop)
clickIcon(settingIcon,settingPop)
clickIcon(gameIcon,gamePop)
//wallpaper//

const bgImg = document.querySelector("body");
const bmw = document.getElementById("bmw")
const girl = document.getElementById("girl")
const kali = document.getElementById("kali")
const nature = document.getElementById("nature")
function bgchange(src){
    bgImg.style.backgroundImage=`url("${src}")`
}

function addevent (ele){
    ele.addEventListener("click",()=>{
        bgchange(ele.src)
    })
}
addevent(bmw)
addevent(girl)
addevent(kali)
addevent(nature)

// live time //
function times(){
    const currentTime = new Date();
    let hrs =currentTime.getHours();
    let mins=currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let day = currentTime.getDate();
    let month = currentTime.getMonth()+1
    ;
    let year = currentTime.getFullYear();
    const t= document.getElementById("time");
    const d = document.getElementById("date");
    t.textContent=hrs+ ":" +mins +":" + sec;
    d.textContent=day + "-"+month+"-"+year;
}

setInterval(times,1000);



    