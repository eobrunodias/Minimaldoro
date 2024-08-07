const inputSeconds = document.querySelector<HTMLInputElement>("#seconds");
const inputMinutes = document.querySelector<HTMLInputElement>("#minutes");
const play = document.querySelector<HTMLInputElement>("#play");

let valueMinutes = inputMinutes?.getAttribute("value");
let valueSeconds = inputSeconds?.getAttribute("value");

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
    // valueMinutes = inputMinutes.innerHTML;
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

// prevents the caracter "e"
inputMinutes?.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "e" || e.key === "E") {
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
});

console.log("cheguei aq");
console.log(valueMinutes);

play?.addEventListener("click", () => {
  let minutesConverted = Number(valueMinutes);

  // fora do while
  console.log("fora");
  if (minutesConverted > 0) {
    console.log("dentro");

    setInterval(() => {
      --minutesConverted;
      console.log(minutesConverted);
      console.log(valueMinutes);
    }, 1000);
  }
});
