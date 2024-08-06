const displayMinutes = document.querySelector("#minutes");
const displaySeconds = document.querySelector("#seconds");

displayMinutes?.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  const minutesElement = target as HTMLElement;
  const currentMinutes = minutesElement.textContent || "00";
  const inputMinutes = document.createElement("input");

  inputMinutes.classList.add("input-time");

  inputMinutes.type = "number";
  inputMinutes.value = currentMinutes.padStart(2, "0");
  inputMinutes.min = "0";
  inputMinutes.max = "60";
  inputMinutes.step = "1";

  if (parseInt(inputMinutes.value) > 60) {
    inputMinutes.value = "60";
  }

  inputMinutes.addEventListener("blur", () => {
    minutesElement.textContent = inputMinutes.value.padStart(2, "0");
    inputMinutes.replaceWith(minutesElement);
  });

  minutesElement.replaceWith(inputMinutes);
  inputMinutes.focus();
});

displaySeconds?.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  const secondsElement = target as HTMLElement;
  const currentSeconds = secondsElement.textContent || "00";
  const inputSeconds = document.createElement("input");

  inputSeconds.classList.add("input-time");

  inputSeconds.type = "number";
  inputSeconds.value = currentSeconds.padStart(2, "0");
  inputSeconds.min = "0";
  inputSeconds.max = "59";
  inputSeconds.step = "1";
  inputSeconds.maxLength = 2;

  if (parseInt(inputSeconds.value) > 60) {
    inputSeconds.value = "59";
  }

  if (inputSeconds.value.length > 2) {
    secondsElement.textContent = inputSeconds.value.slice(0, 2);
  }

  secondsElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      secondsElement.textContent = inputSeconds.value.padStart(2, "0");
      inputSeconds.replaceWith(secondsElement);
    }
  });

  inputSeconds.addEventListener("blur", () => {
    secondsElement.textContent = inputSeconds.value.padStart(2, "0");
    inputSeconds.replaceWith(secondsElement);
  });

  secondsElement.replaceWith(inputSeconds);
  inputSeconds.focus();
});
