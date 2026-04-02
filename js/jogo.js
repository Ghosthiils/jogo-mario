const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverScreen = document.getElementById('gameOverScreen');
const retryButton = document.getElementById('retryButton');
const rankingButton = document.getElementById('rankingButton');
const menuButton = document.getElementById('menuButton');


const scoreElement = document.getElementById('score');
const playerNameElement = document.getElementById('playerName')
const jumpSound = document.getElementById('jumpSound');
const gameOverSound = document.getElementById('gameOverSound');
const bgMusic = document.getElementById('bgMusic');






  const usuario = JSON.parse(localStorage.getItem("usuario"))
  const milestoneSound = document.getElementById('milestoneSound');



let ultimoMilestone = 0
 

  let velocidade = 0.7
  pipe.style.animationDuration = `${velocidade}s`



  if (!usuario) {
    alert("Voce precisa estar logado !")
    window.location.href = "login.html"
  }

  playerNameElement.innerText = 'Jogador: ' + usuario.nome

let score = 0 

const scoreInterval = setInterval(() => {
    score++
    scoreElement.innerText = score

    if (pipePosition < 0) {

        if (score < 2000 && score % 500 === 0 && velocidade > 0.5) {
            velocidade -= 0.3
            pipe.style.animationDuration = `${velocidade}s`
    }
    
if (score >= 2000 && score % 300 === 0 && velocidade >0.3) {
    velocidade -= 0.3
    pipe.style.animationDuration = `${velocidade}s`
}
    
}

if (score >= ultimoMilestone + 6000) {
    milestoneSound.currentTime = 0
    milestoneSound.play()
    ultimoMilestone = score
}

}, 10)

    
 


const jump = () => {
mario.classList.add('jump');

jumpSound.currentTime = 0;
jumpSound.play();

setTimeout(() => {
    mario.classList.remove('jump');
}, 500);
}

const loop = setInterval(() => {
    

const pipePosition = pipe.offsetLeft;

const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

const marioWidth = mario.offsetWidth;
const pipeWidth = pipe.offsetWidth;

console.log(marioPosition)

    


if (
    pipePosition <= marioWidth - 20 &&
    pipePosition > 0 &&
    marioPosition < pipeWidth - 10
    
) {

    gameOverSound.play()

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


 


/////////

}
})



function salvarPontuacao() {

    fetch('http://localhost:3000/salvar-pontuacao', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'

        },
        body: JSON.stringify({
            nome: usuario.nome,
            pontos: score
        })
    })

}    ///////////////////

document.addEventListener('keydown', jump);


retryButton.addEventListener('click' , () => {
    location.reload();
});
   
  rankingButton.addEventListener('click' , () => {
   
  });

  menuButton.addEventListener('click', () => {
    
   
  })

  document.addEventListener('click' , () => {
    bgMusic.play()
  })

  jumpSound.volume = 0.1
gameOverSound.volume = 0.3
bgMusic.volume = 0.1





  

  





