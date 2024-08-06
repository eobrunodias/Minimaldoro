const soundOff = document.querySelector("#sound-off");
const soundOn = document.querySelector("#sound-on");

soundOff?.addEventListener("click", () => {
  soundOff?.classList.add("hide");
  soundOn?.classList.remove("hide");
});

soundOn?.addEventListener("click", () => {
  soundOn?.classList.add("hide");
  soundOff?.classList.remove("hide");
});
