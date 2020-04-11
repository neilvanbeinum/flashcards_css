const flipButton = document.querySelector('.flip');
const cardText = document.querySelector('.card-text');
const card = document.querySelector('.inner');

function randomBetween(lower, upper) {
  return Math.random() * (upper - lower) + lower;
}

function flipCard(e) {
  const { flipSideText } = card.dataset;

  card.classList.toggle('flipped');

  card.setAttribute('style', `--rotationDeg: ${randomBetween(-1, 1)}deg`);

  card.removeChild(cardText);

  card.dataset.flipSideText = cardText.value;

  cardText.value = flipSideText;

  card.appendChild(cardText);
}

flipButton.addEventListener('click', flipCard);
