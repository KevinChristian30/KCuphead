import { DEFAULT_CUPHEAD_HEIGHT, DEFAULT_CUPHEAD_WIDTH } from "../../globals.js";
import { CupheadState } from "./CupheadState.js";
const assets = [
    '../../../assets/game/cuphead/Jump/Cuphead/cuphead_jump_0001.png',
    '../../../assets/game/cuphead/Jump/Cuphead/cuphead_jump_0002.png',
    '../../../assets/game/cuphead/Jump/Cuphead/cuphead_jump_0003.png',
    '../../../assets/game/cuphead/Jump/Cuphead/cuphead_jump_0004.png',
    '../../../assets/game/cuphead/Jump/Cuphead/cuphead_jump_0005.png',
    '../../../assets/game/cuphead/Jump/Cuphead/cuphead_jump_0006.png',
    '../../../assets/game/cuphead/Jump/Cuphead/cuphead_jump_0007.png',
    '../../../assets/game/cuphead/Jump/Cuphead/cuphead_jump_0008.png',
];
export class Jumping extends CupheadState {
    setSprites() {
        assets.forEach((asset) => {
            const image = new Image();
            image.src = asset;
            this.sprites.push(image);
        });
    }
    constructor(cuphead) {
        super(cuphead, DEFAULT_CUPHEAD_WIDTH, DEFAULT_CUPHEAD_HEIGHT);
        this.spriteFrameLimit = 5;
    }
    moveLeft() { }
    moveRight() { }
    jump() { }
    duck() { }
}
