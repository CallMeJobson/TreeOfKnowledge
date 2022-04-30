const closeModal = document.getElementById('close-modal');
const openModal = document.getElementById('open-modal');
const overlay = document.getElementById('overlay');
overlay.style.display = 'none';
openModal.addEventListener("click",()=>{
    overlay.style.display = 'block';
})


closeModal.addEventListener("click",()=>{
    overlay.style.display = 'none';
})



