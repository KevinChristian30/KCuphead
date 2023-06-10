import { GameObject } from "./GameObject.js";

/**
 * Child class of GameObject
 * Represents a Background (Non Collidable)
 * 
 * @attribute {image} - CanvasImageSource containing the background image
 */
export
class Background extends GameObject {

  private image: CanvasImageSource;

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, filePath: string) {
    super(ctx, x, y, width, height);
    this.image = new Image();
    this.image.src = filePath;
  }

  /**
   * @Override
   */
  public render(): void {
    this.getCtx().drawImage(this.image, super.getX(), super.getY(), super.getWidth(), super.getHeight());
  }

  /**
   * @Override
   */
  public update(): void {
    throw new Error("Method not implemented.");
  }
    
}
