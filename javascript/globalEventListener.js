import { Cuphead } from "./classes/Cuphead.js";
import { CANVAS } from "./globals.js";
let isFullScreen = false;
let isArrowRightPressed = false;
let isArrowLeftPressed = false;
let isZPressed = false;
let isArrowDownPressed = false;
document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowRight')
        isArrowRightPressed = true;
    if (event.code === 'ArrowLeft')
        isArrowLeftPressed = true;
    if (event.key.toLocaleLowerCase() === 'z')
        isZPressed = true;
    if (event.code === 'ArrowDown')
        isArrowDownPressed = true;
});
document.addEventListener('keyup', function (event) {
    if (event.key.toLowerCase() === 'f') {
        if (isFullScreen) {
            document.exitFullscreen();
            isFullScreen = false;
        }
        else {
            CANVAS.requestFullscreen();
            isFullScreen = true;
        }
    }
    if (event.code === 'ArrowRight') {
        isArrowRightPressed = false;
        Cuphead.getInstance().setState(Cuphead.getInstance().idleState);
    }
    else if (event.code === 'ArrowLeft') {
        isArrowLeftPressed = false;
        Cuphead.getInstance().setState(Cuphead.getInstance().idleState);
    }
    else if (event.key.toLowerCase() === 'z') {
        isZPressed = false;
        Cuphead.getInstance().setState(Cuphead.getInstance().idleState);
    }
    else if (event.code === 'ArrowDown') {
        isArrowDownPressed = false;
        Cuphead.getInstance().setIsDucking(false);
        Cuphead.getInstance().setState(Cuphead.getInstance().idleState);
    }
});
function update() {
    if (isArrowRightPressed)
        Cuphead.getInstance().moveRight();
    if (isArrowLeftPressed)
        Cuphead.getInstance().moveLeft();
    if (isZPressed)
        Cuphead.getInstance().jump();
    if (isArrowDownPressed)
        Cuphead.getInstance().duck();
    requestAnimationFrame(update);
}
requestAnimationFrame(update);
