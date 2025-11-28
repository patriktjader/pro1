const revealBtn = document.querySelector('.reveal-button')
const wowTitle = document.querySelector('.wow-title')
const wowScene = document.querySelector('.wow-scene') // 👈 background div
const hiddenSection = document.querySelector('.hidden-section')

if (revealBtn) {
  revealBtn.addEventListener('click', () => {
    revealBtn.classList.add('charging')

    const soundcloud = document.createElement('iframe')
    soundcloud.src =
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A671453519&auto_play=true'
    soundcloud.allow = 'autoplay'
    soundcloud.style.display = 'none'
    document.body.appendChild(soundcloud)

    setTimeout(() => {
      revealBtn.classList.remove('charging')
      revealBtn.style.display = 'none'

      hiddenSection.classList.add('show')
      wowTitle.classList.remove('hidden')
      wowTitle.classList.add('show')
      wowScene.classList.add('show')
    }, 2000)
  })
}

function playUploadedVideo(event) {
  const file = event.target.files[0]
  if (file) {
    const video = document.getElementById('upload-video')
    video.src = URL.createObjectURL(file)
    video.style.display = 'block'
  }
}

function downloadSelectedVideo() {
  const selectElement = document.getElementById('download-select')
  const videoPath = selectElement.value
  if (videoPath) {
    const link = document.createElement('a')
    link.href = videoPath
    link.download = videoPath.split('/').pop()
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } else {
    alert('Select a video')
  }
}

const form = document.querySelector('.contact-form')
const success = document.querySelector('.success')

form.addEventListener('submit', e => {
  e.preventDefault()

  success.classList.add('show')

  // Hide after 3 seconds
  setTimeout(() => {
    success.classList.remove('show')
  }, 3000)
})
