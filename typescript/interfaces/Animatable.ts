/**
 * Animatable interface is implemented by everything that need animation
 * 
 * @attribute {sprites} - an array containing CanvasImageSource
 * @attribute {currentSpriteIndex} - the current index in the 'sprites' array which should be rendered
 * @attribute {spriteFrameLimit} - the limit in which the concrete class will change sprite
 * @attribute {currentSpriteFrameLimit} - the current counter for sprite frame limit
 */ 

//* Important!
//? 5 sprite needs to be rendered at 60 frames
//? that means we change the sprite every 12 frames 
//? 12 in this case is called the spriteFrameLimit

export
interface Animatable {

  sprites: Array<CanvasImageSource>;
  currentSpriteIndex: number;
  spriteFrameLimit: number;
  currentSpriteFrameLimit: number;
  
}