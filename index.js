let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

let hscore=0;
function homeOne(){
    hscore+=1;
    homeScore.textContent=hscore;
}
function homeTwo(){
    hscore+=2;
    homeScore.textContent=hscore;
}
function homeThree(){
    hscore+=3;
    homeScore.textContent=hscore;
}

let gscore=0;
function guestOne(){
    gscore+=1;
    guestScore.textContent=gscore;
}
function guestTwo(){
    gscore+=2;
    guestScore.textContent=gscore;
}
function guestThree(){
    gscore+=3;
    guestScore.textContent=gscore;
}

function reset(){
    hscore=0;
    homeScore.textContent=hscore;
    gscore=0;
    guestScore.textContent=gscore;
}