import { Cuphead } from "../../classes/Cuphead.js";
import { DEFAULT_CUPHEAD_HEIGHT, DEFAULT_CUPHEAD_WIDTH, FLOOR, GRAVITY } from "../../globals.js";
import { CupheadState } from "./CupheadState.js";

const assets: Array<string> = [
  '../../../assets/game/cuphead/Idle/cuphead_idle_0001.png',
  '../../../assets/game/cuphead/Idle/cuphead_idle_0002.png',
  '../../../assets/game/cuphead/Idle/cuphead_idle_0003.png',
  '../../../assets/game/cuphead/Idle/cuphead_idle_0004.png',
  '../../../assets/game/cuphead/Idle/cuphead_idle_0005.png',
  '../../../assets/game/cuphead/Idle/cuphead_idle_0004.png',
  '../../../assets/game/cuphead/Idle/cuphead_idle_0003.png',
  '../../../assets/game/cuphead/Idle/cuphead_idle_0002.png',
];

export
class Idle extends CupheadState {

  setSprites(): void {
    assets.forEach((asset: string) => {
      const image: HTMLImageElement = new Image();
      image.src = asset;
      this.sprites.push(image);
    });
  }

  constructor(cuphead: Cuphead) {
    super(cuphead, DEFAULT_CUPHEAD_WIDTH, DEFAULT_CUPHEAD_HEIGHT);
    this.spriteFrameLimit = 5;
  }

  moveLeft(): void {
    this.cuphead.setX(this.cuphead.getX() - this.cuphead.getSpeed());
    this.cuphead.setIsFacingLeft(true);
    this.cuphead.setState(this.cuphead.runNormalState);
  }

  moveRight(): void {
    this.cuphead.setX(this.cuphead.getX() + this.cuphead.getSpeed());
    this.cuphead.setIsFacingLeft(false);
    this.cuphead.setState(this.cuphead.runNormalState);
  }

  jump(): void {
    if (this.cuphead.getY() + this.cuphead.getHeight() < FLOOR) return;
    
    this.cuphead.setGravity(-1.5);
    setTimeout(() => {
        
      this.cuphead.setGravity(GRAVITY);

    }, 100);
  }

  duck(): void {
    if (!this.cuphead.getIsDucking()) {
        
      this.cuphead.setState(this.cuphead.duckingState);
      this.cuphead.setIsDucking(true);
    
    } else {

      this.cuphead.setState(this.cuphead.duckIdleState);

    }
  }

}