const inputSeconds = document.querySelector("#seconds");
const inputMinutes = document.querySelector("#minutes");

if (
  inputMinutes?.getAttribute("value") === "00" &&
  inputSeconds?.getAttribute("value") === "00"
) {
}

inputSeconds?.addEventListener("input", () => {
  if (inputMinutes?.getAttribute("value") === "00") {
  }
});
