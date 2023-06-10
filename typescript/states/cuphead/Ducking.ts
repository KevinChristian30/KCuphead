import { Cuphead } from "../../classes/Cuphead.js";
import { DEFAULT_CUPHEAD_HEIGHT, DEFAULT_CUPHEAD_WIDTH, GRAVITY } from "../../globals.js";
import { CupheadState } from "./CupheadState.js";

const assets: Array<string> = [
  '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0001.png',
  '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0002.png',
  '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0004.png',
  '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0005.png',
  '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0006.png',
  '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0007.png',
  '../../../assets/game/cuphead/Duck/Idle/cuphead_duck_0008.png',
];

export
class Ducking extends CupheadState {

  setSprites(): void {
    assets.forEach((asset: string) => {
      const image: HTMLImageElement = new Image();
      image.src = asset;
      this.sprites.push(image);
    });
  }

  constructor(cuphead: Cuphead) {
    super(cuphead, DEFAULT_CUPHEAD_WIDTH * 1.5, DEFAULT_CUPHEAD_HEIGHT / 2);
    this.spriteFrameLimit = 5;
  }

  /**
   * @Override
   */
  render(): void {
    this.cuphead.setY(this.cuphead.getY() + this.cuphead.getHeight() - this.height);
    super.render();
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

  jump(): void {}

  duck(): void {
    if (!this.cuphead.getIsDucking()) {
        
      this.cuphead.setState(this.cuphead.duckingState);
      this.cuphead.setIsDucking(true);
  
    } else {

      this.cuphead.setState(this.cuphead.duckIdleState);

    }
  }

}