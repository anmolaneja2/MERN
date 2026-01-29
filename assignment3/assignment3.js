const boxes = document.querySelectorAll('.box');

boxes.forEach(box=>{box.addEventListener('click',()=>{
    box.style.backgroundColor=box.id
})})


const inputText = document.getElementById('nameInput');
const buttonSubmit = document.getElementById('submitBtn');
const header = document.querySelector('.head-nav');

let username = "";

buttonSubmit.addEventListener('click', () => {
  username = inputText.value;
  header.textContent = `Hello ${username}`;
});