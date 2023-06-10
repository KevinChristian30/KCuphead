import { DEFAULT_CUPHEAD_HEIGHT, DEFAULT_CUPHEAD_WIDTH, FLOOR, GRAVITY } from "../../globals.js";
import { CupheadState } from "./CupheadState.js";
const assets = [
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0001.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0002.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0003.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0004.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0005.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0006.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0007.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0008.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0009.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0010.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0011.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0012.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0013.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0014.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0015.png',
    '../../../assets/game/cuphead/Run/Normal/cuphead_run_0016.png',
];
export class RunNormal extends CupheadState {
    setSprites() {
        assets.forEach((asset) => {
            const image = new Image();
            image.src = asset;
            this.sprites.push(image);
        });
    }
    constructor(cuphead) {
        super(cuphead, DEFAULT_CUPHEAD_WIDTH, DEFAULT_CUPHEAD_HEIGHT);
        this.spriteFrameLimit = 3;
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
    jump() {
        if (this.cuphead.getY() + this.cuphead.getHeight() < FLOOR)
            return;
        this.cuphead.setGravity(-1.5);
        setTimeout(() => {
            this.cuphead.setGravity(GRAVITY);
        }, 100);
    }
    duck() { }
}
