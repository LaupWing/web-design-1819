import data from './dialogue.js'
const audio = document.querySelector('audio');
let audioInterval;
let time = 0;
let wordIndex = 0;

// ################ EventListeners
audio.addEventListener('play', checkState)
audio.addEventListener('pause',checkState)
window.addEventListener('load',()=>{
    loadSpeakers()
})
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

let currentIndex = 0

function loadCaption2(){
    const currentCaption     = document.querySelector(".captions h2#current")
    const nextCaption        = document.querySelector(".captions h2#next")

    currentCaption.innerHTML = putWordInSpanEL(data.data[currentIndex].content)
    nextCaption.innerHTML    = putWordInSpanEL(data.data[currentIndex+1].content)

    
}

function putWordInSpanEL(sentence){
    return sentence
        .split(' ')
        .map(word=>`<span>${word}</span>`)
        .join(' ')
}

loadCaption2()

function loadCaption(){
    const currentCaption = document.querySelector(".captions h2#current")
    // const nextCaption = document.querySelector(".captions h2#next")
    data.data.forEach((item,index)=>{
        const currentTimeInDecimal = roundDecimal(audio.currentTime)
        // currentCaption.innerText = item.content
        
        if(currentTimeInDecimal > item.start && currentTimeInDecimal < item.end ){
            const duration        = (item.end - item.start);
            const wordArray       = item.content.split(" ")
            const durationOneWord = duration / wordArray.length;
            const displayWordTime = (item.start+durationOneWord*(wordIndex+1))-0.13
            highlightSpeaker(item.who)

            if(currentTimeInDecimal >= displayWordTime){
                currentCaption.innerText += ` ${wordArray[wordIndex]} `
                console.log(wordIndex, wordArray[wordIndex]);
                wordIndex++;
                if(wordIndex==wordArray.length){
                    console.log('Reset wordIndex',wordIndex, wordArray.length)
                    wordIndex = 0;
                    setTimeout(()=>{
                        deleteClass()
                        currentCaption.innerText = ""
                    },durationOneWord+200)
                }
            }
        }
    })
}


function loadSpeakers(){
    const unique = data.data
    .map(x=>x.who)
    .filter(onlyUnique);
    unique.forEach(name=>{
        const element = `<div class="speaker centering"><svg viewBox="0 0 472.13 472.26">
        <path class="outline" d="M236,0C366.48,0,472.13,105.64,472.17,236.15c0,130.13-106.15,236.21-236.35,236.11C105.85,472.15-.1,366.14-.08,236.2-.07,105.69,105.57,0,236,0ZM398,363.78C461.44,286.32,461.19,161,374.67,82.91,286.86,3.62,152.49,13.25,77.32,103.67,5,190.67,22.78,304.26,74.1,363.16,91,316.32,127,290.76,172.48,275.59c-54.44-41.41-56.84-115-16.11-159.41,39.9-43.47,107-47.31,150.73-8.43,22.64,20.14,35.23,45.5,36.46,75.74,1.55,38-14.08,68.35-44.21,92.19,22.6,7.16,42.89,17.19,60.49,32.16S390.58,341.3,398,363.78ZM235.91,443.12q76.14-1,134.41-49.91c2.83-2.37,3.05-4.8,2.56-7.89a86.32,86.32,0,0,0-19.23-42.19c-12.29-14.8-27.72-25.37-45.25-32.89-31.08-13.34-63.6-16.69-96.93-12.7-27.89,3.33-53.89,12.07-76.35,29.53-19,14.75-31.72,33.48-35.79,57.55-.57,3.41-.5,6.13,2.66,8.77Q160.16,442.11,235.91,443.12Zm.35-176.46a78.22,78.22,0,1,0-78.46-77.84A78.17,78.17,0,0,0,236.26,266.66Z"/>
        <path class="fill" d="M398,363.78c-7.44-22.48-20.45-40.86-38.18-55.94s-37.89-25-60.49-32.16c30.13-23.84,45.76-54.22,44.21-92.19-1.23-30.24-13.82-55.6-36.46-75.74-43.69-38.88-110.83-35-150.73,8.43-40.73,44.38-38.33,118,16.11,159.41C127,290.76,91,316.32,74.1,363.16,22.78,304.26,5,190.67,77.32,103.67c75.17-90.42,209.54-100,297.35-20.76C461.19,161,461.44,286.32,398,363.78Z"/>
        <path class="fill" d="M235.91,443.12Q160.15,442,102,393.39c-3.16-2.64-3.23-5.36-2.66-8.77,4.07-24.07,16.81-42.8,35.79-57.55,22.46-17.46,48.46-26.2,76.35-29.53,33.33-4,65.85-.64,96.93,12.7,17.53,7.52,33,18.09,45.25,32.89a86.32,86.32,0,0,1,19.23,42.19c.49,3.09.27,5.52-2.56,7.89Q312,442.16,235.91,443.12Z"/>
        <path class="fill" d="M236.26,266.66a78.22,78.22,0,1,1,78-78.78A78.2,78.2,0,0,1,236.26,266.66Z"/>
        </svg><h2>${name}</h2></div>`
        document.querySelector('.speakers').insertAdjacentHTML('beforeend', element)
    })
}

function highlightSpeaker(who){
    const allSpeakers = document.querySelectorAll('.speakers .speaker');
    allSpeakers.forEach(speaker=>{
        if(speaker.querySelector('h2').innerText === who){
            speaker.classList.add('highlight')
        }
    })
}

function deleteClass(){
    const allSpeakers = document.querySelectorAll('.speakers .speaker');
    allSpeakers.forEach(speaker=>{
        speaker.classList.remove('highlight')
    })
}
function roundDecimal(value){
    return Math.round(value*10)/10
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function checkState(){
    if(!this.paused)    startCounter()
    else                clearInterval(audioInterval)
}

