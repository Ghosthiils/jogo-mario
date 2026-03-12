const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverScreen = document.getElementById('gameOverScreen');
const retryButton = document.getElementById('retryButton');


const scoreElement = document.querySelector('.score');

let score = 0 

const scoreInterval = setInterval(() => {
    score++
    scoreElement.innerText = score
}, 1000)


const jump = () => {
mario.classList.add('jump');

setTimeout(() => {
    mario.classList.remove('jump');
}, 500);
}

const loop = setInterval(() => {
    

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '')

console.log(marioPosition)


if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px` ;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px` ;

    mario.src = '/image/game-over (1).png';
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);
    clearInterval(scoreInterval)

    gameOverScreen.style.display = 'flex';


    const jogadorNome = prompt("Digite seu nome:") || "jogador"

    fetch('/salvar-pontuacao', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'

        },
        body: JSON.stringify({
            nome: jogadorNome,
            pontos: score
        })
    })

}

}, 10 );


document.addEventListener('keydown', jump);


retryButton.addEventListener('click' , () => {
    location.reload();
});
   
  rankingButton.addEventListener('click' , () => {
   
  });

  menuButton.addEventListener('click', () => {
    
    //alert('voltando ao menu principal...')
  })

  




 

 