export class CupheadState {
    constructor(cuphead, width, height) {
        this.currentSpriteIndex = 0;
        this.currentSpriteFrameLimit = 0;
        this.sprites = new Array();
        this.setSprites();
        this.spriteFrameLimit = 3;
        this.cuphead = cuphead;
        this.stateBeforeJumping = null;
        this.width = width;
        this.height = height;
    }
    render() {
        this.cuphead.setWidth(this.width);
        this.cuphead.setHeight(this.height);
        if (this.cuphead.getIsFacingLeft()) {
            this.cuphead.getCtx().save();
            this.cuphead.getCtx().scale(-1, 1);
            this.cuphead.getCtx().drawImage(this.sprites[this.currentSpriteIndex], this.cuphead.getX() * -1 - this.cuphead.getWidth(), this.cuphead.getY(), this.cuphead.getWidth(), this.cuphead.getHeight());
            this.cuphead.getCtx().restore();
        }
        else {
            this.cuphead.getCtx().drawImage(this.sprites[this.currentSpriteIndex], this.cuphead.getX(), this.cuphead.getY(), this.cuphead.getWidth(), this.cuphead.getHeight());
        }
    }
    update() {
        this.currentSpriteFrameLimit++;
        if (this.currentSpriteFrameLimit % this.spriteFrameLimit == 0) {
            this.currentSpriteIndex = (this.currentSpriteIndex + 1) % this.sprites.length;
            this.currentSpriteFrameLimit = 0;
        }
    }
}
