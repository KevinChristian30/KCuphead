import { DEFAULT_CUPHEAD_HEIGHT, DEFAULT_CUPHEAD_WIDTH } from "../../globals.js";
import { CupheadState } from "./CupheadState.js";
const assets = [
    '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0001.png',
    '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0002.png',
    '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0004.png',
    '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0005.png',
    '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0006.png',
    '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0007.png',
    '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0008.png',
];
export class Ducking extends CupheadState {
    setSprites() {
        assets.forEach((asset) => {
            const image = new Image();
            image.src = asset;
            this.sprites.push(image);
        });
    }
    constructor(cuphead) {
        super(cuphead, DEFAULT_CUPHEAD_WIDTH * 1.5, DEFAULT_CUPHEAD_HEIGHT / 2);
        this.spriteFrameLimit = 5;
    }
    /**
     * @Override
     */
    render() {
        this.cuphead.setY(this.cuphead.getY() + this.cuphead.getHeight() - this.height);
        super.render();
    }
    moveLeft() {
        this.cuphead.setX(this.cuphead.getX() - this.cuphead.getSpeed());
        this.cuphead.setIsFacingLeft(true);
        this.cuphead.setState(this.cuphead.runNormalState);
    }
    moveRight() {
        this.cuphead.setX(this.cuphead.getX() + this.cuphead.getSpeed());
        this.cuphead.setIsFacingLeft(false);
        this.cuphead.setState(this.cuphead.runNormalState);
    }
    jump() { }
    duck() {
        if (!this.cuphead.getIsDucking()) {
            this.cuphead.setState(this.cuphead.duckingState);
            this.cuphead.setIsDucking(true);
        }
        else {
            this.cuphead.setState(this.cuphead.duckIdleState);
        }
    }
}
