import { Background } from "../classes/Background.js";
import { CTX, CANVAS } from "../globals.js";
const painting = new Background(CTX, -25, -50, CANVAS.width + 50, CANVAS.height, '../assets/game/king dice/background/Background/kd_bg_painting.png');
const leftChipStack = new Background(CTX, -10, CANVAS.height - 75, 125, 150, '../../assets/game/king dice/background/Frontground/Left/kd_fg_chips_left.png');
const rightChipStack = new Background(CTX, CANVAS.width - 100, CANVAS.height - 105, 125, 175, '../../assets/game/king dice/background/Frontground/Right/kd_fg_chips_right.png');
/**
 * Facade for rendering Background and Foreground
 */
export class BackgroundFacade {
    static renderBackground() {
        painting.render();
    }
    static renderForeground() {
        leftChipStack.render();
        rightChipStack.render();
    }
}
