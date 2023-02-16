export default function showColorIndication(data) {
  if (data.health > 50) {
    return 'healthy';
  }
  if (data.health <= 50 && data.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

// const indication = document.querySelector('.colorful');
//
// if (showColorIndication(data) === 'critical') {
//   indication.classList.add('red');
// }
//
// if (showColorIndication(data) === 'wounded') {
//   indication.classList.add('yellow');
// }
