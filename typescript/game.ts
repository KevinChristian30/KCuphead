import { Cuphead } from "./classes/Cuphead.js";
import { BackgroundFacade } from "./facades/BackgroundFacade.js";
import { GravityFacade } from "./facades/GravityFacade.js";
import { TableFacade } from "./facades/TableFacade.js";
import { CANVAS, CTX, FPS } from "./globals.js";

/**
 * Defines how to clear the canvas at each animation frame
 */
function clear(): void {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

/**
 * Defines how to render the new animation frame
 */
function render(): void {
  BackgroundFacade.renderBackground();
  TableFacade.render();
  Cuphead.getInstance().render();
  BackgroundFacade.renderForeground();
}

/**
 * Defines how to update the active game objects
 */
function update(): void {
  Cuphead.getInstance().update();
  GravityFacade.getInstance().pull();
}

/**
 * Runs the main loop of the canvas
 */
function runAnimation(): void {
  clear();
  render();
  update();
}

setInterval(runAnimation, 1000 / FPS);