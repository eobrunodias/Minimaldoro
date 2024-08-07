const soundOff = document.querySelector<HTMLOrSVGImageElement>("#sound-off");
const soundOn = document.querySelector<HTMLOrSVGImageElement>("#sound-on");

const backgroundMusic =
  document.querySelector<HTMLAudioElement>("#background-sound");
const breakMusic = document.querySelector<HTMLAudioElement>("#break-sound");

const breakTag = document.querySelector<HTMLSpanElement>("#break-tag");

function toggleAudio() {
  if (breakTag?.classList.contains("hidden")) {
    // Se breakTag tem a classe hidden, toca backgroundMusic e pausa breakMusic
    if (backgroundMusic) {
      backgroundMusic.volume = 0.1;
      backgroundMusic.play();
    }
    if (breakMusic) {
      breakMusic.pause();
    }
  } else {
    // Se breakTag não tem a classe hidden, toca breakMusic e pausa backgroundMusic
    if (breakMusic) {
      breakMusic.volume = 0.1;
      breakMusic.play();
    }
    if (backgroundMusic) {
      backgroundMusic.pause();
    }
  }
}

// Inicializa o estado correto dos áudios
toggleAudio();

// Adiciona os eventos de clique para os botões de som
soundOff?.addEventListener("click", () => {
  soundOff.classList.add("hide");
  soundOn?.classList.remove("hide");

  if (backgroundMusic) {
    backgroundMusic.play();
  }
});

soundOn?.addEventListener("click", () => {
  soundOn.classList.add("hide");
  soundOff?.classList.remove("hide");

  if (backgroundMusic) {
    backgroundMusic.pause();
  }
});

// Adicione um evento para monitorar mudanças no estado do breakTag
const observer = new MutationObserver(() => {
  toggleAudio();
});

// Observe alterações na classe do breakTag
if (breakTag) {
  observer.observe(breakTag, { attributes: true, attributeFilter: ["class"] });
}

// Chame toggleAudio quando o estado do breakTag mudar dinamicamente
