/**
 * Represents a game object
 * 
 * @attribute {CanvasRenderingContext2D} ctx - 2d context to render the game object
 * @attribute {x} x - Position in x axis starting from top left
 * @attribute {y} y - Position in y axis starting from top left (inverted)
 * @attribute {width} - Width of the game object
 * @attribute {height} - Height of the game object
 */
export
abstract class GameObject {

  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  
  public getCtx(): CanvasRenderingContext2D {
    return this.ctx;
  }

  public getX(): number {
    return this.x;
  }

  public setX(x: number): void {
    this.x = x;
  }

  public getY(): number {
    return this.y;
  }

  public setY(y: number): void {
    this.y = y;
  }

  public getWidth(): number {
    return this.width;
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  /**
   * Defines how a game object should be rendered
   */
  public abstract render(): void;

  /**
   * Defines how a game object should be updated
   */
  public abstract update(): void;

}
