const inputAngle = document.querySelectorAll(".input-angle");
const checkBtn = document.querySelector(".btn-check")
const outputEl = document.querySelector("#output-el")
function calculateSum(){
    let sum = 0;
    sum = Number(inputAngle[0].value)+ 
        Number(inputAngle[1].value)+
        Number(inputAngle[2].value)
    return sum;
}
function isTriangle(){
    let sum = calculateSum();
    if(sum === 180){
        outputEl.innerText = "Congrats brother, it is a triangle"
    }else{
        outputEl.innerText = "Yo, you are dumb ma man"
    }
}

checkBtn.addEventListener('click', isTriangle)