import data from './dialogue.js'
const audio = document.querySelector('audio');
let audioInterval;
let time = 0;

// ################ EventListeners
audio.addEventListener('play', checkState)
audio.addEventListener('pause',checkState)

function startCounter(){
    audioInterval = setInterval(()=>{
                            time++
                            document.querySelector('h1').innerText = `Time: ${toSeconds(time)}`
                            loadCaption()
                        },100)
}

function toSeconds(value){
    return value/10
}

let wordIndex = 0;
function loadCaption(){
    data.data.forEach(item=>{
        const currentTimeInDecimal = roundDecimal(audio.currentTime)

        if(currentTimeInDecimal > item.start && currentTimeInDecimal < item.end ){
            const duration = (item.end - item.start);
            const wordArray = item.content.split(" ")
            const durationOneWord = duration / wordArray.length;
            const displayWordTime = (item.start+durationOneWord*(wordIndex+1))-0.135
            if(currentTimeInDecimal >= displayWordTime){
                document.querySelector(".captions h2").innerText += ` ${wordArray[wordIndex]} `
                console.log(wordIndex, wordArray[wordIndex]);
                wordIndex++;
                if(wordIndex==wordArray.length){
                    console.log('Reset wordIndex',wordIndex, wordArray.length)
                    wordIndex = 0;
                    setTimeout(()=>{
                        document.querySelector(".captions h2").innerText = ""
                    },durationOneWord+200)
                }
            }
        }
    })
}

function roundDecimal(value){
    return Math.round(value*10)/10
}

function checkState(){
    if(!this.paused)    startCounter()
    else                clearInterval(audioInterval)
}

