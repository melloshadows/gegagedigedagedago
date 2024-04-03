let btn = document.querySelector("button")
let vid = document.querySelectorAll("video")
let ball = document.querySelector('.ball');
let container = document.querySelector('#container');


function playagain(){
    for(let i = 0 ; i < vid.length ; i++){
        vid[i].addEventListener("ended", function(){
           if(i == 0){
            location.reload()
           }
           else
            vid[i].play()
            
        })
    }
}

function vidplayed(){
    let currentTime = Math.floor(vid[0].currentTime);

    if (currentTime === 7) {
        vid[1].style.display = 'block';
        vid[1].play();
    }
    if (currentTime === 9) {
        vid[5].style.display = 'block';
        vid[5].play();
    }
    if (currentTime === 12) {
        vid[6].style.display = 'block';
        vid[6].play();
    }
    if (currentTime === 15) {
        vid[2].style.display = 'block';
        vid[2].play();
    } 
    if (currentTime === 17) {
        vid[7].style.display = 'block';
        vid[7].currentTime = 1
        vid[7].play();
    }
    if (currentTime === 20) {
        vid[3].style.display = 'block';
        vid[3].play();
    }
    if (currentTime === 23) {
        vid[4].style.display = 'block';
        vid[4].play();
    }
  
}

btn.addEventListener("click", function(){
    vid[0].play()
    vid[0].addEventListener("timeupdate", vidplayed)
    playagain()
    ball.classList.add("bigger")
})