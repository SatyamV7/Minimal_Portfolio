document.addEventListener('contextmenu', event => event.preventDefault());

//Date & Time
let noClock = false;
let _12hour = false;

function UpdateClock() {
    let timeEl = document.getElementById('clock');
    if (noClock)
        timeEl.style.display = "none";
    else
        timeEl.style.display = "block";
    let d = new Date();
    if (_12hour)
        timeEl.innerHTML = `${new Intl.DateTimeFormat('en-GB', { 'hour': '2-digit', 'minute': '2-digit', 'second': '2-digit', 'hour12': true }).format(d)}`.replace("AM", 'AM').replace("PM", 'PM');
    else
        timeEl.innerHTML = `${new Intl.DateTimeFormat('en-US', { 'hour': '2-digit', 'minute': '2-digit', 'second': '2-digit', 'hour12': true }).format(d)}`.replace("AM", 'AM').replace("PM", 'PM');
    setTimeout(UpdateClock, 1);
}

UpdateClock();

var play = document.getElementsByClassName('play')
var pause = document.getElementsByClassName('pause')
var audio = document.getElementById("audio");

function playfunc() {
    if (play[0].style !== undefined) {
        play[0].style.display = "none";
    }
    if (pause[0].style !== undefined) {
        pause[0].style.display = "block";
    }
}

function pausefunc() {
    if (play[0].style !== undefined) {
        play[0].style.display = "block";
    }
    if (pause[0].style !== undefined) {
        pause[0].style.display = "none";
    }
}

function audioCtrl() {
    audio.paused ? audio.play() : audio.pause();
}