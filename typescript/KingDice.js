import Character from "./Character.js";
import Dice from "./Dice.js";

const MAXINTRO = 48;
const MAXCLAP = 63;
const MAXIDLE = 33;

var start = true;
var clap = true;
var currX = 1;
var maxX = MAXINTRO;
var fps = 0;
export var state = "INTRO";

var showDice = false;

const PATH = "../../kingdice-assets/";
var INTRO = "intro/boss-battle-kingdice-intro (" +  currX + ").png";
var CLAP = "clap/boss-battle-kingdice-clap (" +  currX + ").png";
var IDLE = "idle/boss-battle-kingdice-idle (" +  currX + ").png";

const STATE = new Image();

export default class KingDice extends Character {
    constructor(ctx, x, y) {
        super(ctx, 1000, x, y, 900, 320);
        this.dice = new Dice(ctx, 670, 400);;
    }

    MainThread() {
        this.Draw();
        this.DrawDice();
        this.DrawState();
        this.Interval();
    }

    Interval() {
        if (fps >= 1) {
            currX = (currX % maxX) + 1;
        }
        fps = (fps + 1) % 2;
    }

    Draw() {
        this.ctx.drawImage(STATE, this.x, this.y, this.width, this.height);
    }

    DrawState() {
        if (state === "INTRO") {
            this.DrawIntro();
        }
        else if (state === "CLAP") {
            this.DrawClap();
        }
        else if (state === "IDLE") {
            this.DrawIdle();
        }
    }

    DrawDice() {
        if (showDice) {
            this.dice.MainThread();
        }
    }

    DrawIntro() {
        if (start && currX < MAXINTRO) {
            INTRO = "intro/boss-battle-kingdice-intro (" +  currX + ").png";
            STATE.src = PATH + INTRO;
        }
        else {
            if (start) {
                currX %= MAXINTRO;
                currX += 1;
            }
            start = false;
            state = "CLAP";
        }
    }

    DrawClap() {
        if (clap && currX < MAXCLAP) {
            maxX = MAXCLAP;
            CLAP = "clap/boss-battle-kingdice-clap (" +  currX + ").png";
            STATE.src = PATH + CLAP;

            if (currX === 32) {
                showDice = true;
            }
        }
        else {
            if (clap) {
                currX %= MAXINTRO;
                currX += 1;
            }
            clap = false;
            state = "IDLE";
        }
    }

    DrawIdle() {
        maxX = MAXIDLE;
        IDLE = "idle/boss-battle-kingdice-idle (" +  currX + ").png";
        STATE.src = PATH + IDLE;
    }
}