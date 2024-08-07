import {
  inputMinutes,
  inputSeconds,
  pauseBtn,
  playBtn,
  replayBtn,
} from "./elements";

import { timerClear } from "./timer";

export function togglePlayAndPause() {
  pauseBtn?.classList.toggle("hide");
  playBtn?.classList.toggle("hide");
  replayBtn?.classList.toggle("hide");
}

export function pause() {
  pauseBtn?.addEventListener("click", togglePlayAndPause);
}

export function play() {
  if (!timerClear) {
    playBtn?.addEventListener("click", togglePlayAndPause);
  }
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
