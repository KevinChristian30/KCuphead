import { GameObject } from "./GameObject.js";
/**
 * Child class of GameObject
 * Represents a Background (Non Collidable)
 *
 * @attribute {image} - CanvasImageSource containing the background image
 */
export class Background extends GameObject {
    constructor(ctx, x, y, width, height, filePath) {
        super(ctx, x, y, width, height);
        this.image = new Image();
        this.image.src = filePath;
    }
    /**
     * @Override
     */
    render() {
        this.getCtx().drawImage(this.image, super.getX(), super.getY(), super.getWidth(), super.getHeight());
    }
    /**
     * @Override
     */
    update() {
        throw new Error("Method not implemented.");
    }
}
