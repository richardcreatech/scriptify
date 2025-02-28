let submit = document.getElementById('submit');
let enteredPassword = document.getElementById('enteredPassword');
let confirmPassword = document.getElementById('confirmPassword');

const generateRandomemojis = () => {
    let randomdeterminer = Math.floor((Math.random() * 6) );
    if(randomdeterminer == 1){
        return "🤭";
    }
    if(randomdeterminer == 2){
        return '🍟';
    }
    if(randomdeterminer == 3){
        return "🪲";
    }
    if(randomdeterminer == 4){
        return "😡";
    }
    if(randomdeterminer == 5){
        return "🎧";
    }
    else{
        return "🍛";
    }
}



submit.onclick = function(e) {
    if(enteredPassword.value.trim() != confirmPassword.value.trim()){
        e.preventDefault();
        alert(`Passwords don't  match ${generateRandomemojis()} `);
    }
}