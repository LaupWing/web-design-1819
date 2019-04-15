import data from './dialogue.js'
const audio = document.querySelector('audio');
let audioInterval;
let time = 0;

// ################ Event Variabels
audio.addEventListener('play', checkState)
audio.addEventListener('pause',checkState)

function startCounter(){
    audioInterval = setInterval(()=>{
                            time++
                            document.querySelector('h1').innerText = `Time: ${toSeconds(time)}`
                        },100)
}

function toSeconds(value){
    return value/10
}

function checkState(){
    if(!this.paused)    startCounter()
    else                clearInterval(audioInterval)
}

