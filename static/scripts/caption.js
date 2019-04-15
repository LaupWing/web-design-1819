const audio = document.querySelector('audio');

// Eerste grote nadeel van je functie's zo declareren alle functions worden niet meer gehoisd
const checkState = function(){
    console.log(this.paused)
    if(!this.paused){
        console.log('Audio is playing')
    }else{
        console.log('Audio is paused')  
    }
}
const audioIsPlaying = audio.addEventListener('play', checkState)

const audioIsPaused = audio.addEventListener('pause',checkState)
