const countDead = document.getElementById('dead');
const countLost = document.getElementById('lost');
const holes = document.getElementsByClassName('hole');
let counterDead = 0;
let counterLost = 0;

for (let hole of holes) {
  hole.addEventListener('click', function() {

    if (hole.classList.contains('hole_has-mole')) {
      counterDead++;
      countDead.textContent = counterDead;
    } else {
      counterLost++;
      countLost.textContent = counterLost;
    }
    
    if (counterLost === 5) {
      alert('Вы проиграли');
      GameOver();
    }

    if (counterDead === 10) {
      alert('Вы победили!');
      GameOver();
    }

  });
}

  function GameOver() {
  counterDead = 0;
  counterLost = 0;
  countDead.textContent = '0';
  countLost.textContent = '0';
  }