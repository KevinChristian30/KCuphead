import { Background } from "../classes/Background.js";
import { CTX, CANVAS } from "../globals.js";
import { spaces } from "./SpacesFacade.js";
import { odds } from "./OddsFacade.js";
const table = new Background(CTX, 0, CANVAS.height - 300, CANVAS.width, 300, '../assets/game/king dice/background/Table/kd_bg_table.png');
/**
 * Facade for rendering Table with Spaces and Odds attached
 */
export class TableFacade {
    static renderTable() {
        table.render();
    }
    static renderSpaces() {
        spaces.forEach((space) => {
            space.render();
        });
    }
    static renderOdds() {
        odds.forEach((odd) => {
            odd.render();
        });
    }
    static render() {
        this.renderTable();
        this.renderSpaces();
        this.renderOdds();
    }
}
