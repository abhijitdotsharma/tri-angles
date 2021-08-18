const base = document.querySelector("#base")
const height = document.querySelector('#height')
const checkBtn = document.querySelector('#btn-check')
const outputEl = document.querySelector('.output-el')

function calculateArea(baseTriangle, heightTriangle){
    let product = 0.5 * (baseTriangle * heightTriangle)
    return product
}

checkBtn.addEventListener('click', function(){
    let area = calculateArea(Number(base.value), Number(height.value))
    outputEl.innerText = "The area is : "+ area
})

