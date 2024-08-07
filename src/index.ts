import { handleToggleTheme } from "./scripts/theme";
import { pauseBtn, playBtn, replayBtn } from "./scripts/controls";
import "./scripts/sound";
import "./scripts/timer";
import "./scripts/rounds";

handleToggleTheme();

// Controls
pauseBtn();
playBtn();
replayBtn();
