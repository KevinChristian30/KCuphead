
const MAXIDLE = 24;

var currX = 1;
var maxX = MAXIDLE;
var fps = 0;
var state = "IDLE";

const PATH = "../../kingdice-assets/dice/";
var IDLE = "idle/boss-battle-kingdice-pinkdice-idle (" +  currX + ").png";

const STATE = new Image();

export default class Dice {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x;
        this.y = y;
        this.width = 125;
        this.height = 125;
    }

    MainThread() {
        this.Draw();
        this.DrawState();
        this.Interval();
    }

    Interval() {
        if (fps >= 7) {
            currX = (currX % maxX) + 1;
        }
        fps = (fps + 1) % 8;
    }

    Draw() {
        this.ctx.drawImage(STATE, this.x, this.y, this.width, this.height);
    }

    DrawState() {
        if (state === "IDLE") {
            this.DrawIdle();
        }
    }

    DrawIdle() {
        var IDLE = "idle/boss-battle-kingdice-pinkdice-idle (" +  currX + ").png";
        STATE.src = PATH + IDLE;
    }

    
}