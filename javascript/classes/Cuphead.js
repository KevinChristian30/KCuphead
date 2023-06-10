import { CTX, FLOOR, GRAVITY } from "../globals.js";
import { DuckIdle } from "../states/cuphead/DuckIdle.js";
import { Ducking } from "../states/cuphead/Ducking.js";
import { Idle } from "../states/cuphead/Idle.js";
import { Jumping } from "../states/cuphead/Jumping.js";
import { RunNormal } from "../states/cuphead/RunNormal.js";
import { GameObject } from "./GameObject.js";
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
class Cuphead extends GameObject {
    constructor(ctx, x, y, width, height) {
        super(ctx, x, y, width, height);
        this.speed = 4;
        this.idleState = new Idle(this);
        this.runNormalState = new RunNormal(this);
        this.duckingState = new Ducking(this);
        this.duckIdleState = new DuckIdle(this);
        this.jumpingState = new Jumping(this);
        this.currentState = this.idleState;
        this.isDucking = false;
        this.isFacingLeft = false;
        this.gravitySpeed = 0;
        this.gravity = GRAVITY;
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new Cuphead(CTX, 50, 300, 0, 0);
        return this.instance;
    }
    drop() {
        this.gravitySpeed += this.gravity;
        this.setY(this.getY() + this.gravitySpeed);
        if (this.getY() + this.getHeight() >= FLOOR) {
            this.setY(FLOOR - this.getHeight());
            this.gravitySpeed = 0;
        }
    }
    render() {
        this.currentState.render();
    }
    update() {
        this.currentState.update();
    }
    setState(newState) {
        this.currentState = newState;
    }
    getState() {
        return this.currentState;
    }
    getIsFacingLeft() {
        return this.isFacingLeft;
    }
    setIsFacingLeft(isFacingLeft) {
        this.isFacingLeft = isFacingLeft;
    }
    getSpeed() {
        return this.speed;
    }
    getGravity() {
        return this.gravity;
    }
    setGravity(gravity) {
        this.gravity = gravity;
    }
    getIsDucking() {
        return this.isDucking;
    }
    setIsDucking(isDucking) {
        this.isDucking = isDucking;
    }
    moveRight() {
        this.currentState.moveRight();
    }
    moveLeft() {
        this.currentState.moveLeft();
    }
    jump() {
        this.currentState.jump();
    }
    duck() {
        this.currentState.duck();
    }
}
Cuphead.instance = null;
export { Cuphead };
