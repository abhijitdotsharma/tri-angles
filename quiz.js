const questionForm = document.querySelector(".question-form")
const checkBtn = document.querySelector("#btn-check")
const outputEl = document.querySelector('#output-el')

//array of correct answers
const correctAns = ['50', '80']

function calculateScore(){
    let score = 0;
    let index = 0; 
    //have to learn form and FormData again
    const formResults = new FormData(questionForm)
    for(let value of formResults.values()){
        if(value === correctAns[index]){
            score++
        }
        index++
    }
    outputEl.innerText = `You scored : ${score}`
}

checkBtn.addEventListener('click', calculateScore)