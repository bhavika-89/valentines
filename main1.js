onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");

  if (music) {
    music.volume = 0.4; // soft romantic volume

    music.play().catch(() => {
      // If autoplay is blocked, play on first user interaction
      document.body.addEventListener(
        "click",
        () => {
          music.play();
        },
        { once: true }
      );
    });
  }
});

  };
function createHeart() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💗";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 22 + 14 + "px";
      heart.style.animationDuration = Math.random() * 3 + 4 + "s";
      heart.style.opacity = Math.random() * 0.5 + 0.4;

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 8000);
    }
    setInterval(createHeart, 380);
  