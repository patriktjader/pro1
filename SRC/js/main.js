const revealBtn = document.querySelector('.reveal-button');
const wowTitle = document.querySelector('.wow-title');
const wowScene = document.querySelector('.wow-scene'); // 👈 background div
const hiddenSection = document.querySelector('.hidden-section');

if (revealBtn) {
  revealBtn.addEventListener('click', () => {
    // Start charge-up animation
    revealBtn.classList.add('charging');

    // Start music instantly
    const soundcloud = document.createElement('iframe');
    soundcloud.src =
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A671453519&auto_play=true";
    soundcloud.allow = "autoplay";
    soundcloud.style.display = "none";
    document.body.appendChild(soundcloud);

    // Wait 2 seconds, then reveal everything
    setTimeout(() => {
      revealBtn.classList.remove('charging');
      revealBtn.style.display = 'none';

      // Reveal section, title, and background
      hiddenSection.classList.add('show');
      wowTitle.classList.remove('hidden');
      wowTitle.classList.add('show');
      wowScene.classList.add('show'); // 👈 make sure the image fades in too
    }, 2000);
  });
}

function playUploadedVideo(event) {
    const file = event.target.files[0];
    if (file) {
        const video = document.getElementById('uploaded-video');
        video.src = URL.createObjectURL(file);
        video.style.display = 'block';
    }
}