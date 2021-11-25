
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = "#ccc";

let x = 0;
for (let i = 0; i < 150; i++){
    
    let y = Math.floor(Math.random() * 50) + 100;
    let height = 120 - (y - 100);
    if (i>40&&i%7== 0||i%9==0) {
        y = y + 30
        height = height+(100-height);
    }
    
    ctx.fillRect(x, y, 4, height);
    x = x + 7.5
}

//--------Function to Play and Pause Music----------

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