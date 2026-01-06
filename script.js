let slides = document.querySelectorAll('.slide');
let index = 0;
let musicStarted = false;

function nextSlide() {
  if (!musicStarted) {
    document.getElementById('music').play();
    musicStarted = true;
  }
  slides[index].classList.remove('active');
  index++;
  slides[index].classList.add('active');
}

// tombol kabur
const noBtn = document.getElementById('noBtn');
if (noBtn) {
  noBtn.addEventListener('mouseover', () => {
    noBtn.style.left = Math.random() * 200 - 100 + 'px';
    noBtn.style.top = Math.random() * 200 - 100 + 'px';
  });
}

function showPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function restart() {
  location.reload();
}