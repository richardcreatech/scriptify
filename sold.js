const itemsListed = document.querySelector('.itemsListed');
const listed = document.querySelectorAll('.listed');
const columns = document.querySelector('.column');
const rows = document.querySelector('.rows');
const slidUp = document.querySelector('.swing');
const hiddenbar  = document.querySelector('.ul');
const setItup = document.querySelector('.setItup');
const setbox = document.querySelector('.set-box')
const cancellation = document.querySelector('.cancel');

columns.addEventListener('click', () => {
    itemsListed.classList.add('grided');
    for(let i = 0; i < listed.length; i++){
        listed[i].classList.add('cookie');
    }
})

rows.addEventListener('click', () => {
    itemsListed.classList.remove('grided');
})


slidUp.addEventListener('click', () =>
    {
      hiddenbar.classList.toggle('slideOut');  
    })


const determineDisplay = () => {
    setbox.classList.toggle('displayBox');

}



setItup.onclick = () => {
    determineDisplay();
}

cancellation.onclick = () => {
    determineDisplay();
}

document.querySelector('.deleteAccount').onclick = () => {
    alert('Are you sure 🤔!');
}