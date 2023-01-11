const target = document.querySelector('.target');
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;
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
addEventListener('load', () => {
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    coordinates.innerHTML = `${x}px, ${y}px`;
    coordinates.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    drawLine(x, y);
  });
});
