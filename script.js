const PASSWORD = "1234"; // Basit JS şifre kontrolü

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

  for (let i = 1; i <= 4; i++) { // 10 fotoğraf varsayalım
    fetch(`Text/${i}.txt`)
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        const title = lines[0];
        const desc = lines.slice(1).join('<br>');

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="img/${i}.jpg" alt="${title}">
          <h3>${title}</h3>
          <p>${desc}</p>
        `;
        gallery.appendChild(card);
      })
      .catch(err => console.log(`Fotoğraf ${i}.txt okunamadı`, err));
  }
}

// Müzik kısmı
let currentTrack = 1;
function loadMusic() {
  const audio = document.getElementById("audio");
  audio.src = `Muzik/${currentTrack}.mp3`;
}

function nextTrack() {
  currentTrack++;
  if (currentTrack > 5) currentTrack = 1; // 5 şarkı varsayalım
  loadMusic();
}
