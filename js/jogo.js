const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverScreen = document.getElementById('gameOverScreen');
const retryButton = document.getElementById('retryButton');
const rankingButton = document.getElementById('rankingButton');
const menuButton = document.getElementById('menuButton');

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

    gameOverScreen.style.display = 'flex';

}

}, 10 );


document.addEventListener('keydown', jump);


retryButton.addEventListener('click' , () => {
    location.reload();
});
   
  rankingButton.addEventListener('click' , () => {
    alert('Aqui futuramente vai aparecer a tabela de rankings!')
  });

  menuButton.addEventListener('click', () => {
    
    //alert('voltando ao menu principal...')
  })


  fetch('/salvar-pontuacao', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      nome: jogadorNome,
      pontos: score
    })
  });
