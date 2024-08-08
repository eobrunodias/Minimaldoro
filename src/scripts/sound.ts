import {
  backgroundMusic,
  breakMusic,
  breakTag,
  soundOff,
  soundOn,
  pauseBtn,
} from "./elements";

let isSoundOn = false;
let isPaused = pauseBtn?.classList.contains("hide");

if (backgroundMusic) {
  backgroundMusic.volume = 0.5;
  backgroundMusic.pause();
}

if (breakMusic) {
  breakMusic.volume = 0.1;
  breakMusic.pause();
}

soundOff?.addEventListener("click", () => {
  soundOff?.classList.add("hide");
  soundOn?.classList.remove("hide");
  isSoundOn = true;

  if (!isPaused) {
    if (breakTag?.classList.contains("hidden")) {
      backgroundMusic?.play();
      breakMusic?.pause();
    } else {
      breakMusic?.play();
      backgroundMusic?.pause();
    }
  }
});

soundOn?.addEventListener("click", () => {
  soundOn?.classList.add("hide");
  soundOff?.classList.remove("hide");
  isSoundOn = false;

  backgroundMusic?.pause();
  breakMusic?.pause();
});

if (breakTag) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (isSoundOn && !isPaused) {
          if (breakTag?.classList.contains("hidden")) {
            backgroundMusic?.play();
            breakMusic?.pause();
          } else {
            breakMusic?.play();
            backgroundMusic?.pause();
          }
        }
      }
    }
  });

  observer.observe(breakTag, { attributes: true });
} else {
  console.error("breakTag not found");
}

if (pauseBtn) {
  const pauseObserver = new MutationObserver(() => {
    isPaused = pauseBtn?.classList.contains("hide");
    if (isPaused) {
      backgroundMusic?.pause();
      breakMusic?.pause();
    } else if (isSoundOn) {
      if (breakTag?.classList.contains("hidden")) {
        backgroundMusic?.play();
      } else {
        breakMusic?.play();
      }
    }
  });

  pauseObserver.observe(pauseBtn, { attributes: true });
}
