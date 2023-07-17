export default function showColorIndication(data) {
  return data.health > 50 ? 'healthy' : (data.health >= 15 ? 'wounded' : 'critical');
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
