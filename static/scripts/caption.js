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
        // const audioTimeInSeconds = Number(audio.currentTime
        //     .toString()
        //     .split('.')
        //     [0])
        
        const currentTimeInDecimal = roundDecimal(audio.currentTime)

        if(currentTimeInDecimal > item.start && currentTimeInDecimal < item.end ){
            const duration = (item.end - item.start);
            const wordArray = item.content.split(" ")
            const durationOneWord = duration / wordArray.length;
            // const displayWordTime = roundDecimal((item.start+durationOneWord*(wordIndex+1))-0.1)
            const displayWordTime = (item.start+durationOneWord*(wordIndex+1))-0.135
            // console.log('STRING: ', item.content)
            // console.log('Startingpoint: ',item.start)
            // console.log('Endingpoint: ', item.end)
            // console.log('Duration One word: ', durationOneWord)
            // console.log("Display word timestap", displayWordTime)
            // console.log('Word Index: ',wordIndex)
            // console.log('CurrentTime:', currentTimeInDecimal)
            // console.log('##############################################')

            console.log(currentTimeInDecimal ,displayWordTime)
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
            // console.log(item.start+durationOneWord)
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

