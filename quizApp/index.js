
let score = localStorage.getItem("score")
let num1 = Math.ceil(Math.random()*20)
let num2 = Math.ceil(Math.random()*10)
let correctAns = num1 * num2
const fromEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")
scoreEl.innerText =`Score ${score}`


const questionEl = document.getElementById("question")

questionEl.innerText =` What is ${num1} Multiple by ${num2} `


fromEl.addEventListener("submit" ,()=>{
 
  const userAns = +inputEl.value
  console.log(userAns)
  if(userAns === correctAns){
    score++
    storeLocal()
  }else{
    score--
    storeLocal()
  }
})

function storeLocal(){
  localStorage.setItem("score" , JSON.stringify(score))
}

