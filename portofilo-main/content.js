function about(){
    return "I'm an enthusiastic MSc CS student with a flair for designing and developing webpages. Through mastery of HTML and CSS, I breathe life into creative ideas, prioritizing user-centric designs. Alongside a solid grasp of Python basics, I'm actively advancing towards backend development, aspiring to engineer comprehensive and innovative digital solutions.";
}

addEventListener("DOMContentLoaded",function(){
    const aboutme =document.getElementById("ab");
    const para =about();
    aboutme.textContent=para;
})



//click know//

const paraDgvc=getElementById("dgvc").addEventListener("click",function(){
    const dgvcPara = document.getElementById("dgp");
    dgvcPara.textContent="Iam currently pursuing an MSc in computer Science (2023-2025)";
})