const nature = document.getElementById("nature");
const horse = document.getElementById("horse");
const stone = document.getElementById("stone");
const score = document.getElementById("score");

function jump() {
    horse.classList.add('jump-animation');
    setTimeout(() => {
      horse.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () => {
    jump();
});

setInterval(() => {
  score.innerText++;
  const horsetop = parseInt(window.getComputedStyle(horse).getPropertyValue('top'));
  const stoneleft = parseInt(window.getComputedStyle(stone).getPropertyValue('left'));
  
  if (stoneleft < 0) {
    stone.style.display = 'none';
  }
  else stone.style.display = '';


  if(stoneleft < 50 && horsetop > 150 && stoneleft > 0){
    alert('Your score is :' + score.innerText + '\n\nWanna play again?');
     location.reload;
  }
  


}, 50);



