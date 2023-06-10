/**
 * Animatable interface is implemented by everything that collides and is affected by gravity
 * 
 * @attribute {gravitySpeed} - current gravity speed (velocity)
 * @attribute {gravity} - default gravity speed (acceleration)
 */ 
export 
interface RigidBody {

  gravitySpeed: number;
  gravity: number;
  drop(): void;
  
}