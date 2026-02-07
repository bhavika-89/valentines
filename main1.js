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
  