
// .survey_button
// const el = document.querySelectorAll('.main-content')

sessionStorage.clear();

const question1 = document.getElementById('q1')
const question2 = document.getElementById('q2')
const question3 = document.getElementById('q3')
const question4 = document.getElementById('q4')

question1.addEventListener('click', (e)=>handleClick(e))
question2.addEventListener('click', (e)=>handleClick(e))
question3.addEventListener('click', (e)=>handleClick(e))
question4.addEventListener('click', (e)=>handleClick(e))



const handleClick=(e)=>{

let userRequest = {[e.currentTarget.id]: e.target.textContent.trim()}

let data = JSON.parse(sessionStorage.getItem("userRequest"));

let addData= {...data, ...userRequest};
// console.log(addData);
sessionStorage.setItem("userRequest",JSON.stringify(addData));
} 
