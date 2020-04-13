const flipButton = document.querySelector('.flip-button');
const card = document.querySelector('.inner');

function randomBetween(lower, upper) {
  return Math.random() * (upper - lower) + lower;
}

function flipCard() {
  card.classList.toggle('flipped');
  card.setAttribute('style', `--rotationDeg: ${randomBetween(-1, 1)}deg`);
}

flipButton.addEventListener('click', flipCard);
