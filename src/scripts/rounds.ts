const rounds = document.querySelector("#rounds");
const inputSeconds = document.querySelector("#seconds");
const inputMinutes = document.querySelector("#minutes");

if (
  inputMinutes?.getAttribute("value") === "00" &&
  inputSeconds?.getAttribute("value") === "00"
) {
  console.log("deu");
}

inputSeconds?.addEventListener("input", (e) => {
  if (inputMinutes?.getAttribute("value") === "00") {
  }
  console.log(e);
});
