document.addEventListener("click", (e) => {
  const target = (e.target as HTMLElement).closest("svg");

  const light = document.querySelector("#light");
  const dark = document.querySelector("#dark");
  const play = document.querySelector("#play");
  const pause = document.querySelector("#pause");
  const replay = document.querySelector("#replay");
  const soundOff = document.querySelector("#sound-off");
  const soundOn = document.querySelector("#sound-on");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");

  // Mode
  if (target?.id === "light") {
    light?.classList.add("hide");
    dark?.classList.remove("hide");
  }

  if (target?.id === "dark") {
    dark?.classList.add("hide");
    light?.classList.remove("hide");
  }

  // Controls
  if (target?.id === "play") {
    play?.classList.add("hide");
    pause?.classList.remove("hide");
  }

  if (target?.id === "pause") {
    pause?.classList.add("hide");
    play?.classList.remove("hide");
  }

  // Sound
  if (target?.id === "sound-on") {
    soundOn?.classList.add("hide");
    soundOff?.classList.remove("hide");
  }

  if (target?.id === "sound-off") {
    soundOff?.classList.add("hide");
    soundOn?.classList.remove("hide");
  }

  // Replay
  if (target?.id === "replay") {
    replay?.classList.add("icon-actived");

    setTimeout(() => {
      replay?.classList.remove("icon-actived");
    }, 500);
  }
});
