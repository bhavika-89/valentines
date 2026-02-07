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

const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 500);


  };
  