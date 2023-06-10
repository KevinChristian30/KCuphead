/**
 * Represents a game object
 *
 * @attribute {CanvasRenderingContext2D} ctx - 2d context to render the game object
 * @attribute {x} x - Position in x axis starting from top left
 * @attribute {y} y - Position in y axis starting from top left (inverted)
 * @attribute {width} - Width of the game object
 * @attribute {height} - Height of the game object
 */
export class GameObject {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getCtx() {
        return this.ctx;
    }
    getX() {
        return this.x;
    }
    setX(x) {
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
}
