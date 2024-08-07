import {
  backgroundMusic,
  breakMusic,
  breakTag,
  soundOff,
  soundOn,
} from "./elements";

if (breakTag?.classList.contains("hidden")) {
  if (backgroundMusic) {
    backgroundMusic.volume = 0.1;
    backgroundMusic.play();
  }
  if (breakMusic) {
    breakMusic.pause();
  }
} else {
  if (breakMusic) {
    breakMusic.volume = 0.1;
    breakMusic.play();
  }
  if (backgroundMusic) {
    backgroundMusic.pause();
  }
}

soundOff?.addEventListener("click", () => {
  soundOff?.classList.add("hide");
  soundOn?.classList.remove("hide");

  if (backgroundMusic) {
    backgroundMusic.play();
  }
});

soundOn?.addEventListener("click", () => {
  soundOn?.classList.add("hide");
  soundOff?.classList.remove("hide");

  if (backgroundMusic) {
    backgroundMusic.pause();
  }
});
