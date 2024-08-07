const buttonPlay = document.querySelector("#play");
const buttonPause = document.querySelector("#pause");
const buttonReplay = document.querySelector("#replay");

const inputSeconds = document.querySelector<HTMLInputElement>("#seconds");
const inputMinutes = document.querySelector<HTMLInputElement>("#minutes");

export function pauseBtn() {
  buttonPause?.addEventListener("click", () => {
    buttonPause?.classList.add("hide");
    buttonPlay?.classList.remove("hide");
    buttonReplay?.classList.remove("hide");
  });
}

export function playBtn() {
  buttonPlay?.addEventListener("click", () => {
    if (inputSeconds?.value === "00" && inputMinutes?.value === "00") return;

    buttonPlay?.classList.add("hide");
    buttonPause?.classList.remove("hide");
    buttonReplay?.classList.add("hide");
  });
}

export function replayBtn() {
  buttonReplay?.addEventListener("click", () => {
    buttonReplay?.classList.add("icon-actived");

    setTimeout(() => {
      buttonReplay?.classList.remove("icon-actived");
    }, 1000);

    if (inputSeconds && inputMinutes) {
      inputSeconds.value = "00";
      inputMinutes.value = "00";
    }
  });
}
