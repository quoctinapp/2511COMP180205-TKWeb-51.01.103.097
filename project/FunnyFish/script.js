const bgBtn = document.getElementById('bgBtn');
const ocean = document.getElementById('ocean');
const backgrounds = ['bg1', 'bg2', 'bg3', 'bg4'];
let currentBg = 0;

bgBtn.addEventListener('click', () => {
    ocean.classList.remove(backgrounds[currentBg]);
    currentBg = (currentBg + 1) % backgrounds.length;
    ocean.classList.add(backgrounds[currentBg]);
});

const musicBtn = document.getElementById('musicBtn');
const musicText = document.getElementById('musicText');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicText.textContent = 'Phát Nhạc';
        musicBtn.querySelector('.btn-icon').textContent = '🎵';
    } else {
        bgMusic.play();
        musicText.textContent = 'Dừng Nhạc';
        musicBtn.querySelector('.btn-icon').textContent = '⏸️';
    }
    isPlaying = !isPlaying;
});