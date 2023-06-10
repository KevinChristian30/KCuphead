import { Cuphead } from "../classes/Cuphead.js";
import { RigidBody } from "../interfaces/RigidBody.js";

export 
class GravityFacade {

  private objectPool: Array<RigidBody>;
  
  private static instance: GravityFacade | null = null;

  private constructor() {
    this.objectPool = new Array<RigidBody>();
    this.objectPool.push(Cuphead.getInstance());
  }

  public static getInstance(): GravityFacade {
    if (this.instance === null) this.instance = new GravityFacade();
    return this.instance;
  }

  pull(): void {
    this.objectPool.forEach((object: RigidBody) => {
      object.drop();
    });
  }

}