const inputSeconds = document.querySelector<HTMLInputElement>("#seconds");
const inputMinutes = document.querySelector<HTMLInputElement>("#minutes");
const playBtn = document.querySelector<HTMLButtonElement>("#play");
const pauseBtn = document.querySelector<HTMLButtonElement>("#pause");
const replayBtn = document.querySelector<HTMLButtonElement>("#replay");
const soundOff = document.querySelector<HTMLOrSVGImageElement>("#sound-off");
const soundOn = document.querySelector<HTMLOrSVGImageElement>("#sound-on");
const backgroundMusic =
  document.querySelector<HTMLAudioElement>("#background-sound");
const breakMusic = document.querySelector<HTMLAudioElement>("#break-sound");
const breakTag = document.querySelector<HTMLSpanElement>("#break-tag");
const lightTheme = document.querySelector("#light");
const darkTheme = document.querySelector("#dark");
const rounds = document.querySelector<HTMLSpanElement>("#rounds");
const resetRounds = document.querySelector<HTMLSpanElement>("#reset-rounds");
const inputs = document.querySelectorAll("input");

export {
  inputMinutes,
  inputSeconds,
  pauseBtn,
  playBtn,
  replayBtn,
  soundOff,
  soundOn,
  backgroundMusic,
  breakMusic,
  breakTag,
  lightTheme,
  darkTheme,
  rounds,
  resetRounds,
  inputs,
};
