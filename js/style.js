function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
}
const cards = document.getElementsByClassName('card');
for (const card of cards) {
  card.addEventListener('mouseenter', function mouseCenter() {
    card.style.backgroundColor = randomColor();
  })
  card.addEventListener('mouseleave', function mouseLeave() {
    card.style.backgroundColor = 'white';
  })
}