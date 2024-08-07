import {
  backgroundMusic,
  breakMusic,
  breakTag,
  soundOff,
  soundOn,
} from "./elements";

let isSoundOn = false;

if (backgroundMusic) {
  backgroundMusic.volume = 0.1;
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

  if (breakTag?.classList.contains("hidden")) {
    console.log("Playing background music");
    backgroundMusic?.play();
    breakMusic?.pause();
  } else {
    console.log("Playing break music");
    breakMusic?.play();
    backgroundMusic?.pause();
  }
});

soundOn?.addEventListener("click", () => {
  soundOn?.classList.add("hide");
  soundOff?.classList.remove("hide");
  isSoundOn = false;

  console.log("Pausing all music");
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
        console.log("Mutation observed:", mutation);
        if (isSoundOn) {
          if (breakTag?.classList.contains("hidden")) {
            console.log("Observer: Playing background music");
            backgroundMusic?.play();
            breakMusic?.pause();
          } else {
            console.log("Observer: Playing break music");
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
