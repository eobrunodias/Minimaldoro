const buttonPlay = document.querySelector("#play");
const buttonPause = document.querySelector("#pause");
const buttonReplay = document.querySelector("#replay");

export function togglePause() {
  buttonPause?.addEventListener("click", () => {
    buttonPause?.classList.add("hide");
    buttonPlay?.classList.remove("hide");
    buttonReplay?.classList.remove("hide");
  });
}

buttonPlay?.addEventListener("click", () => {
  buttonPlay?.classList.add("hide");
  buttonPause?.classList.remove("hide");
  buttonReplay?.classList.add("hide");
});

buttonReplay?.addEventListener("click", () => {
  buttonReplay?.classList.add("icon-actived");
});
