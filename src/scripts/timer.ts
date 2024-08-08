import { addClass, removeClass } from "../utils/handle-class-atribute";
import {
  breakTag,
  inputMinutes,
  inputs,
  inputSeconds,
  pauseBtn,
  playBtn,
  replayBtn,
  resetRounds,
  rounds,
} from "./elements";

export const timerClear =
  inputSeconds?.value === "00" && inputMinutes?.value === "00";

let isPause = true;
let minutesDigited = "00";
let secondsDigited = "00";
let isCounting = false;
let isBreak = false;
let intervalId: number | undefined;

function configTimer(minutes?: string, seconds?: string) {
  if (inputMinutes && minutes) {
    inputMinutes.value = minutes.padStart(2, "0");
  }

  if (inputSeconds && seconds) {
    inputSeconds.value = seconds.padStart(2, "0");
  }
}

resetRounds?.addEventListener("click", () => {
  if (rounds) {
    rounds.innerHTML = `1/<span class="total-rounds">4</span>`;
  }

  resetRounds?.classList.add("icon-actived");

  setTimeout(() => {
    resetRounds?.classList.remove("icon-actived");
  }, 1000);
});

inputMinutes?.addEventListener("input", () => {
  if (inputMinutes?.value) {
    if (inputMinutes.value.length > 2) {
      configTimer(inputMinutes?.value.slice(0, 2));
    }

    if (Number(inputMinutes.value) > 59) {
      configTimer("59");
    }

    minutesDigited = inputMinutes.value;
  }
});

inputSeconds?.addEventListener("input", () => {
  if (inputSeconds?.value) {
    if (inputSeconds.value.length > 2) {
      configTimer(undefined, inputSeconds?.value.slice(0, 2));
    }

    if (Number(inputSeconds.value) > 59) {
      configTimer(undefined, "59");
    }

    secondsDigited = inputSeconds.value;
  }
});

inputs?.forEach((input) => {
  input.addEventListener("keydown", (e: KeyboardEvent) => {
    if (
      e.key === "e" ||
      e.key === "E" ||
      e.key === "," ||
      e.key === "." ||
      e.key === "-"
    ) {
      e.preventDefault();
    }
  });
});

inputMinutes?.addEventListener("focus", () => {
  if (inputMinutes) {
    addClass(inputMinutes, "input-actived");
  }
});

inputSeconds?.addEventListener("focus", () => {
  if (inputSeconds) {
    addClass(inputSeconds, "input-actived");
  }
});

inputMinutes?.addEventListener("blur", () => {
  if (inputMinutes) {
    removeClass(inputMinutes, "input-actived");

    if (inputMinutes.value === "") {
      inputMinutes.value = "00";
    }

    if (inputMinutes.value.length < 2) {
      inputMinutes.value = inputMinutes.value.padStart(2, "0");
    }
  }
});

inputSeconds?.addEventListener("blur", () => {
  if (inputSeconds) {
    removeClass(inputSeconds, "input-actived");

    if (inputSeconds.value === "") {
      inputSeconds.value = "00";
    }

    if (inputSeconds.value.length < 2) {
      inputSeconds.value = inputSeconds.value.padStart(2, "0");
    }
  }
});

function startCountdown() {
  if (isCounting) return;
  isCounting = true;

  function countdownStep() {
    if (!isPause) {
      if (
        Number(inputMinutes!.value) === 0 &&
        Number(inputSeconds!.value) === 0
      ) {
        if (isBreak) {
          handleRounds();
        } else {
          startBreak();
        }
      } else if (Number(inputSeconds!.value) > 0) {
        inputSeconds!.value = (Number(inputSeconds!.value) - 1)
          .toString()
          .padStart(2, "0");
      } else {
        inputMinutes!.value = (Number(inputMinutes!.value) - 1)
          .toString()
          .padStart(2, "0");
        inputSeconds!.value = "59";
      }

      intervalId = window.setTimeout(countdownStep, 1000);
    } else {
      isCounting = false;
    }
  }

  countdownStep();
}

function startBreak() {
  isBreak = true;
  breakTag?.classList.remove("hidden");

  inputMinutes!.value = "05";
  inputSeconds!.value = "00";

  startCountdown();
}

function handleRounds() {
  if (rounds) {
    const [currentRound, totalRounds] = rounds.innerText.split("/");
    const newRound = (Number(currentRound) + 1).toString();
    rounds.innerHTML = `${newRound}/<span class="total-rounds">${totalRounds}</span>`;

    breakTag?.classList.add("hidden");
    isBreak = false;

    inputMinutes!.value = minutesDigited.padStart(2, "0");
    inputSeconds!.value = secondsDigited.padStart(2, "0");

    startCountdown();
  }
}

playBtn?.addEventListener("click", () => {
  if (inputMinutes?.value === "00" && inputSeconds?.value === "00") {
    alert(`⏱ Time is zero, please enter a time before starting.`);

    return;
  }

  if (isPause) {
    isPause = false;

    playBtn?.classList.add("hide");
    pauseBtn?.classList.remove("hide");
    replayBtn?.classList.add("hide");

    inputs.forEach((input) => {
      input.disabled = true;
    });

    if (!isCounting) {
      startCountdown();
    }
  }
});

pauseBtn?.addEventListener("click", () => {
  if (!isPause) {
    isPause = true;

    inputs.forEach((input) => {
      input.disabled = false;
    });

    if (intervalId) {
      clearTimeout(intervalId);
      isCounting = false;
    }
  }
});
