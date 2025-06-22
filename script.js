const PASSWORD = "1234";
let currentTrack = 1;
const totalTracks = 5;

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const msg = document.getElementById("login-message");

  if (input === PASSWORD) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    loadGallery();
    loadMusic();
  } else {
    msg.textContent = "Şifre yanlış!";
  }
}

function loadGallery() {
  const gallery = document.getElementById("gallery");

  for (let i = 1; i <= 10; i++) {
    fetch(`Text/${i}.txt`)
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        const title = lines[0];
        const desc = lines.slice(1).join('<br>');

        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        const card = document.createElement("div");
        card.className = "card h-100 shadow-sm";

        card.innerHTML = `
          <img src="img/${i}.jpg" class="card-img-top" alt="${title}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${desc}</p>
          </div>
        `;

        col.appendChild(card);
        gallery.appendChild(col);
      })
      .catch(err => console.log(`Fotoğraf ${i}.txt okunamadı`, err));
  }
}

function loadMusic() {
  const audio = document.getElementById("audio");
  audio.src = `Muzik/${currentTrack}.mp3`;
  audio.play();
}

function nextTrack() {
  currentTrack++;
  if (currentTrack > totalTracks) currentTrack = 1;
  loadMusic();
}

function setVolume(value) {
  const audio = document.getElementById("audio");
  audio.volume = value;
}

function toggleMusicPanel() {
  const panel = document.getElementById("music-panel");
  panel.classList.toggle("hidden");
}
