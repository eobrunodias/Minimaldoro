import { addClass, removeClass } from "../utils/handle-class-atribute";
// import { inputSeconds, inputMinutes, playBtn, pauseBtn } from "./elements-hall";

const inputSeconds = document.querySelector<HTMLInputElement>("#seconds");
const inputMinutes = document.querySelector<HTMLInputElement>("#minutes");
const inputs = document.querySelectorAll("input");
const playBtn = document.querySelector<HTMLButtonElement>("#play");
const pauseBtn = document.querySelector<HTMLButtonElement>("#pause");
const rounds = document.querySelector<HTMLSpanElement>("#rounds");
const resetRounds = document.querySelector<HTMLSpanElement>("#reset-rounds");

let isPause = true;
let minutesDigited = "00";
let secondsDigited = "00";

resetRounds?.addEventListener("click", () => {
  if (rounds) {
    rounds.innerHTML = `${1}/<span class="total-rounds">4</span>`;
  }

  resetRounds?.classList.add("icon-actived");

  setTimeout(() => {
    resetRounds?.classList.remove("icon-actived");
  }, 1000);
});

inputMinutes?.addEventListener("input", () => {
  if (inputMinutes.value.length > 2) {
    inputMinutes.value = inputMinutes.value.slice(0, 2);
  }

  if (Number(inputMinutes.value) > 59) {
    inputMinutes.value = "59";
  }

  minutesDigited = inputMinutes.value;
});

inputSeconds?.addEventListener("input", () => {
  if (inputSeconds.value.length > 2) {
    inputSeconds.value = inputSeconds.value.slice(0, 2);
  }

  if (Number(inputSeconds.value) > 59) {
    inputSeconds.value = "59";
  }

  secondsDigited = inputSeconds.value;
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

inputMinutes?.addEventListener("focus", () =>
  addClass(inputMinutes, "input-actived")
);

inputSeconds?.addEventListener("focus", () =>
  addClass(inputSeconds, "input-actived")
);

inputMinutes?.addEventListener("blur", () => {
  if (inputMinutes) {
    removeClass(inputMinutes, "input-actived");
  }

  if (inputMinutes.value === "") {
    inputMinutes.value = "00";
  }

  if (inputMinutes.value.length < 2) {
    inputMinutes.value = inputMinutes.value.padStart(2, "0");
  }
});

inputSeconds?.addEventListener("blur", () => {
  if (inputSeconds) {
    removeClass(inputSeconds, "input-actived");
  }

  if (inputSeconds.value === "") {
    inputSeconds.value = "00";
  }

  if (inputSeconds.value.length < 2) {
    inputSeconds.value = inputSeconds.value.padStart(2, "0");
  }
});

let intervalId: number | undefined;
function countdown() {
  if (!isPause) {
    if (!inputMinutes || !inputSeconds) return;

    if (Number(inputMinutes.value) === 0 && Number(inputSeconds.value) === 0) {
      if (rounds) {
        const [currentRound, totalRounds] = rounds.innerText.split("/");
        const newRound = (Number(currentRound) + 1).toString();
        rounds.innerHTML = `${newRound}/<span class="total-rounds">${totalRounds}</span>`;

        inputMinutes.value = minutesDigited;
        inputSeconds.value = secondsDigited;
        countdown();
      }
      return;
    }

    if (Number(inputSeconds.value) > 0) {
      inputSeconds.value = String(Number(inputSeconds.value) - 1).padStart(
        2,
        "0"
      );
    } else if (Number(inputMinutes.value) > 0) {
      inputMinutes.value = String(Number(inputMinutes.value) - 1).padStart(
        2,
        "0"
      );
      inputSeconds.value = "59";
    }
  }

  intervalId = setTimeout(countdown, 1000);
}

function play() {
  playBtn?.addEventListener("click", () => {
    console.log(inputMinutes?.value, inputSeconds?.value);
    if (inputMinutes?.value === "00" && inputSeconds?.value === "00") return;

    if (isPause) {
      isPause = false;

      inputs.forEach((input) => {
        input.disabled = true;
      });

      if (intervalId) {
        clearInterval(intervalId);
      }

      countdown();
    }

    return;
  });
}
play();

function pause() {
  pauseBtn?.addEventListener("click", () => {
    if (!isPause) {
      isPause = true;

      inputs.forEach((input) => {
        input.disabled = false;
      });

      if (intervalId) {
        clearInterval(intervalId);
      }
    }
    return;
  });
}
pause();
