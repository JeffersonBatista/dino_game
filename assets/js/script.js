const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

function jump() {  
    isJumping = true;
    let upInterval = setInterval(() => {
      if (position >= 150) {
        clearInterval(upInterval);
        let downInterval = setInterval(() => {
          if (position <= 0) {
            isJumping = false;
            clearInterval(downInterval);
          } else {
            position -= 20;
            dino.style.bottom = position + 'px';
          }
        }, 25);
      } else {
        position += 20;
        dino.style.bottom = position + 'px';
      }
    }, 25);
  }

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1500;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1500 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){

            clearInterval(leftInterval);
            alert('Fim de Jogo');
            
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);
    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);