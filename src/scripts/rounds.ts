import { inputMinutes, inputSeconds } from "./elements";

if (
  inputMinutes?.getAttribute("value") === "00" &&
  inputSeconds?.getAttribute("value") === "00"
) {
}

inputSeconds?.addEventListener("input", () => {
  if (inputMinutes?.getAttribute("value") === "00") {
  }
});
