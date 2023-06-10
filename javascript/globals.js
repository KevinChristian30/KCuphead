/**
 * Canvas object that is used by every object that is rendered.
 */
export const CANVAS = document.getElementById("canvas");
/**
 * Set canvas's default width and height
 */
CANVAS.width = 800;
CANVAS.height = 450;
/**
 * 2d canvas context API that is used for every render.
 */
export const CTX = CANVAS.getContext("2d");
CTX.imageSmoothingEnabled = true;
CTX.imageSmoothingQuality = 'high';
/**
 * Defines the game FPS
 */
export const FPS = 60;
/**
 * Defines the game's floor (bottom for gravity)
 */
export const FLOOR = 390;
/**
 * Defines the gravity speed
 */
export const GRAVITY = 0.5;
/**
 * Defines the default cuphead width
 *
 * It is needed because the width should be defined by each state, and we need a default width as a fallback
 */
export const DEFAULT_CUPHEAD_WIDTH = 60;
/**
 * Defines the default cuphead height
 * It is needed because the height should be defined by each state, and we need a default height as a fallback
 */
export const DEFAULT_CUPHEAD_HEIGHT = 90;
