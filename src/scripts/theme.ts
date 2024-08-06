const lightTheme = document.querySelector("#light");
const darkTheme = document.querySelector("#dark");

export function handleToggleTheme() {
  darkTheme?.addEventListener("click", () => {
    darkTheme?.classList.add("hide");
    lightTheme?.classList.remove("hide");

    document.body.classList.add("light-mode");
  });

  lightTheme?.addEventListener("click", () => {
    lightTheme.classList.add("hide");
    darkTheme?.classList.remove("hide");

    document.body.classList.remove("light-mode");
  });
}