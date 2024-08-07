import { togglePause } from "./controls";

const inputSeconds = document.querySelector<HTMLInputElement>("#seconds");
const inputMinutes = document.querySelector<HTMLInputElement>("#minutes");
const play = document.querySelector<HTMLInputElement>("#play");
const pause = document.querySelector<HTMLInputElement>("#pause");

let isPaused = false;

let valueMinutes = inputMinutes?.getAttribute("value");
let valueSeconds = inputSeconds?.getAttribute("value");

togglePause();

inputMinutes?.getAttribute("value");

function addClass(element: Element, className: String) {
  element?.classList.add(className as string);
}

function removeClass(element: Element, className: String) {
  element?.classList.remove(className as string);
}

function addStyleMinutes() {
  if (inputMinutes) {
    addClass(inputMinutes, "input-actived");
  }
}

inputMinutes?.addEventListener("input", (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (target.value === "e") {
    target.value;
  }

  if (target.value.length > 2) {
    target.value = target.value.slice(0, 2);
  }

  if (target.value > "59") {
    target.value = "59";
  }

  valueMinutes = target.value;
  console.log(valueMinutes);
  console.log(target.value);

  let minutesConverted = Number(valueMinutes);
  console.log(minutesConverted);
  console.log(valueMinutes);
});

inputMinutes?.addEventListener("keydown", (e: KeyboardEvent) => {
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

inputMinutes?.addEventListener("focus", addStyleMinutes);

inputMinutes?.addEventListener("blur", (e) => {
  if (inputMinutes) {
    removeClass(inputMinutes, "input-actived");
  }

  const target = e.target as HTMLInputElement;

  if (target.value === "") {
    target.value = "00";
  }

  if (inputMinutes.value.length < 2) {
    inputMinutes.value = inputMinutes.value.padStart(2, "0");
  }
});

console.log("cheguei aq");
console.log(valueMinutes);

function countdown() {
  if (isPaused) {
    isPaused = true;
    enableInput();
  } else {
    isPaused = false;
    disableInput();

    setTimeout(() => {
      if (Number(inputMinutes?.value) === 0 || isPaused) {
        return;
      }

      if (Number(inputMinutes?.value) === 0 && !isPaused) {
        togglePause();
        isPaused = true;
        return;
      }

      if (inputMinutes) {
        if (Number(inputSeconds?.value) === 0) {
          inputMinutes.value = String(Number(inputMinutes?.value) - 1);

          if (inputMinutes.value.length < 2) {
            inputMinutes.value = inputMinutes.value.padStart(2, "0");
          }
        }
      }

      console.log(Number(inputMinutes?.value));

      countdown();
    }, 1000);
  }
}

play?.addEventListener("click", () => {
  countdown();
});

function disableInput() {
  if (inputMinutes) {
    inputMinutes.disabled = true;
  }
}

function enableInput() {
  if (inputMinutes) {
    inputMinutes.disabled = false;
  }
}

pause?.addEventListener("click", () => {
  if (isPaused) {
    isPaused = false;
    disableInput();
  } else {
    isPaused = true;
    enableInput();
  }
});
