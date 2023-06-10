import { CTX, FLOOR, GRAVITY } from "../globals.js";
import { CupheadState } from "../states/cuphead/CupheadState.js";
import { DuckIdle } from "../states/cuphead/DuckIdle.js";
import { Ducking } from "../states/cuphead/Ducking.js";
import { Idle } from "../states/cuphead/Idle.js";
import { Jumping } from "../states/cuphead/Jumping.js";
import { RunNormal } from "../states/cuphead/RunNormal.js";
import { GameObject } from "./GameObject.js";
import { RigidBody } from "../interfaces/RigidBody.js";

/**
 * Child class of GameObject
 * Implements RigidBody
 * 
 * @attribute {speed} - the number of pixels cuphead moves to the left or right each frame
 * @attribute {isFacingLeft} - is cuphead facing left, needed for rendering
 * @attribute {isDucking} - is cuphead ducking, needed to set the ducking or duckidle state
 * @attribute {instance} - singleton instance for this class
 * @attribute {currentState} - cuphead's current state (state design pattern)
 * 
 * @attribute {idleState} - idle state
 * @attribute {runNormalState} - run normal state
 * @attribute {duckingState} - ducking state
 * @attribute {duckIdleState} - duckIdle state
 * @attribute {jumpingState} - jumping state
 */

export
class Cuphead extends GameObject implements RigidBody{

  gravitySpeed: number;
  gravity: number;

  private speed: number = 4;
  private isFacingLeft: boolean;
  private isDucking: boolean;

  private static instance: Cuphead | null = null;
  private currentState: CupheadState;

  public idleState: CupheadState;
  public runNormalState: CupheadState;
  public duckingState: CupheadState;
  public duckIdleState: CupheadState;
  public jumpingState: CupheadState;

  private constructor(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    super(ctx, x, y, width, height);

    this.idleState = new Idle(this);
    this.runNormalState = new RunNormal(this);
    this.duckingState = new Ducking(this);
    this.duckIdleState = new DuckIdle(this);
    this.jumpingState = new Jumping(this)
    this.currentState = this.idleState;

    this.isDucking = false;
    this.isFacingLeft = false;

    this.gravitySpeed = 0;
    this.gravity = GRAVITY;
  }

  public static getInstance(): Cuphead {
    if (this.instance == null) this.instance = new Cuphead(CTX, 50, 300, 0, 0);
    
    return this.instance;
  }

  drop(): void {
    this.gravitySpeed += this.gravity;
    this.setY(this.getY() + this.gravitySpeed);

    if (this.getY() + this.getHeight() >= FLOOR) {
      this.setY(FLOOR - this.getHeight());
      this.gravitySpeed = 0;
    }
  }

  public render(): void {
    this.currentState.render(); 
  }

  public update(): void {
    this.currentState.update();
  }

  public setState(newState: CupheadState): void {
    this.currentState = newState;
  }

  public getState(): CupheadState {
    return this.currentState;
  }

  public getIsFacingLeft(): boolean {
    return this.isFacingLeft;
  }

  public setIsFacingLeft(isFacingLeft: boolean): void {
    this.isFacingLeft = isFacingLeft;
  }

  public getSpeed(): number {
    return this.speed;
  }

  public getGravity(): number {
    return this.gravity;
  }

  public setGravity(gravity: number): void {
    this.gravity = gravity;
  }

  public getIsDucking(): boolean {
    return this.isDucking;
  }

  public setIsDucking(isDucking: boolean): void {
    this.isDucking = isDucking;
  }

  public moveRight(): void {
    this.currentState.moveRight();
  }

  public moveLeft(): void {
    this.currentState.moveLeft();
  }

  public jump(): void {
    this.currentState.jump();
  }

  public duck(): void {
    this.currentState.duck();
  }

}