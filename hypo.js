const a = document.querySelector("#input-a")
const b = document.querySelector("#input-b")
const btnCheck = document.querySelector("#btn-check")
const outputEl = document.querySelector('.output-el')
function sumOfSquares(a, b){
    let sumSquares = a**2 + b**2
    return sumSquares
}
function sqrtSum(sum){
    return Math.sqrt(sum)
}

btnCheck.addEventListener('click', function(){
    let sum = sumOfSquares(Number(a.value), Number(b.value))
    let hypotenuse = sqrtSum(sum)
    outputEl.innerText = "The hypotenuse is : " + hypotenuse+" cm. "
})