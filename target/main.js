const target = document.querySelector('.target');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const coordinates = document.querySelector('.coordinates');

// 캔버스 크기를 100%로 설정할 수 없어,
// 브라우저 크기가 바뀔 때마다 캔버스 사이즈를 수정해주기 위함
function updateSize() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}
window.addEventListener('DOMContentLoaded', updateSize);
window.addEventListener('resize', updateSize);

// ---------------------------------------------------------

function moveCursor(x, y) {
  target.style.left = x - target.width / 2 + 'px';
  target.style.top = y - target.height / 2 + 'px';
}
function drawLine(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'white';
  // x축
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
  ctx.stroke();
  // y축
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canvas.height);
  ctx.stroke();
}
function updateCoodinates(x, y) {
  coordinates.innerHTML = `${x}px, ${y}px`;
  coordinates.style.left = `${x + 15}px`;
  coordinates.style.top = `${y + 15}px`;
}
window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  moveCursor(x, y);
  drawLine(x, y);
  updateCoodinates(x, y);
});
