const orangeText = document.querySelector('.orangeText');
const body = document.querySelector('.body');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const darkMode = document.querySelector('.darkMode');
const ul = document.querySelector('.ul');
const title = document.querySelector('.title');
const user = document.querySelector('.fa-user');
const bullet = document.getElementsByClassName('bullet');
const navbarControls = document.querySelector('.select');
const submitted = document.querySelector('.submitted');
const navbarRespond = document.querySelector('.showNav')

function darkModeFeatures(){
    body.classList.toggle('blackOut');
    ul.classList.toggle('changed');
    title.classList.toggle('white-title');
    section1.classList.toggle('orangeSection');
    user.classList.toggle('whiteUser');
    section3.classList.toggle('thirdSection');
}

const informat = [
    {Master: 'YAHWEH'},
    {Occupation: 'Student'},
    {Age: 18},
    {Ambition: 'Software Engineer'},
    {Hobbies: "Praying, Cooking, Studying, 3D Animation, Drawing"}
]


    section3.innerHTML  += `
    <p>Master: ${informat[0].Master}</p>
    <p>Occupation: ${informat[1].Occupation}</p>
    <p>Age: ${informat[2].Age}</p>
    <p>Hobbies: ${informat[4].Hobbies}</p>
    `;
    
function activateNavbar() {
    ul.classList.toggle('toggle-left');
    navbarRespond.classList.toggle('hideNav');
}


navbarControls.onclick = () => {
    activateNavbar();
}

function changeSpans(){
    orangeText.innerText = `${nameTag.value.trim()}`;
}


darkMode.onclick = () => {
    darkModeFeatures();
}