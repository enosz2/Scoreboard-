let homecount = document.getElementById(`homescore`)
let guestcount = document.getElementById(`guestscore`)
let homenum = 0
let guestnum = 0

function homeplus1(){
    console.log(`home+1`)
    homenum = homenum + 1
    homecount.textContent= homenum
}

function homeplus2(){
    console.log(`home+2`)
    homenum = homenum + 2
    homecount.textContent= homenum
}

function homeplus3(){
    console.log(`home+3`)
    homenum = homenum + 3
    homecount.textContent= homenum
}

function guestplus1(){
    console.log(`guest+1`)
    guestnum = guestnum + 1
    guestcount.textContent= guestnum
}

function guestplus2(){
    console.log(`guest+2`)
    guestnum = guestnum + 2
    guestcount.textContent= guestnum
}

function guestplus3(){
    console.log(`guest+3`)
    guestnum = guestnum + 3
    guestcount.textContent= guestnum
}