import {
  inputMinutes,
  inputSeconds,
  pauseBtn,
  playBtn,
  replayBtn,
} from "./elements";

export function pause() {
  pauseBtn?.addEventListener("click", () => {
    pauseBtn?.classList.add("hide");
    playBtn?.classList.remove("hide");
    replayBtn?.classList.remove("hide");
  });
}

export function play() {
  playBtn?.addEventListener("click", () => {
    if (inputSeconds?.value === "00" && inputMinutes?.value === "00") return;

    playBtn?.classList.add("hide");
    pauseBtn?.classList.remove("hide");
    replayBtn?.classList.add("hide");
  });
}

export function replay() {
  replayBtn?.addEventListener("click", () => {
    replayBtn?.classList.add("icon-actived");

    setTimeout(() => {
      replayBtn?.classList.remove("icon-actived");
    }, 1000);

    if (inputSeconds && inputMinutes) {
      inputSeconds.value = "00";
      inputMinutes.value = "00";
    }
  });
}
