
let canvas = document.getElementById('canvas');
let realCanvas = document.getElementById('realCanvas');
let [canvaBox] = document.getElementsByClassName('canvaBox')

let ctx = canvas.getContext('2d');
let realCtx = realCanvas.getContext('2d');
ctx.fillStyle = "#ccc";
realCtx.fillStyle = "#D99EAB";

//  Creating multiple bars using loop with and making the bars equally from bottom my increasing the y according to height;
let x = 0;
for (let i = 0; i < 150; i++){
    
    let y = Math.floor(Math.random() * 50) + 100;
    let height = 120 - (y - 100);
    if (i>40&&i%7== 0||i%9==0) {
        y = y + 30
        height = height+(100-height);
    }
    
    ctx.fillRect(x, y, 4, height);
    realCtx.fillRect(x, y, 4, height);
    x = x + 7.5
}

//-----------Function to Play and Pause Music--------------
let music = document.getElementById('music');
let playBtn = document.getElementById('palyBtn');
playBtn.addEventListener('click', playMusic);

function playMusic() {
    if (playBtn.innerHTML == 'play_arrow') {
        music.play();
        playBtn.innerHTML = "pause";

    }
    else {
        music.pause();
        playBtn.innerHTML = 'play_arrow';
    }
}

let inputRange = document.getElementById('audioRange') 
inputRange.addEventListener('change', (e) => {
    const currentRange = e.target.value;
    let duration = music.duration;
    let updatedTime = (duration / 100) * currentRange;
    
    music.currentTime = updatedTime;
});
//  on time updat we are show the bars color upto time in (%)
music.ontimeupdate = function (e) {
    let currentTime = e.target.currentTime
    let duration = e.target.duration
    let caluculatePercentage = ((currentTime / duration) * 100).toFixed(2);

    canvaBox.style.width = `${caluculatePercentage}%`
}
music.onended = function () {
    playMusic();
}

// To mute and unmute audio----------------
let sound = document.getElementById('volume');
sound.addEventListener('click', soundChange);
function soundChange() {
    if (sound.innerText=='volume_up') {
        music.muted = true;
        sound.innerText='volume_off'
    }
    else {
        music.muted = false;
        sound.innerText='volume_up'
    }
}
// For skiping audion 10 seconds every time we click on fastForward button
let fastForward = document.getElementById('fastFrBtn');

fastForward.addEventListener('click', skipTime);
function skipTime() {
    let currTime = music.currentTime;
    music.currentTime = currTime + 10;
    
}
