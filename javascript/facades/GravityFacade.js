import { Cuphead } from "../classes/Cuphead.js";
class GravityFacade {
    constructor() {
        this.objectPool = new Array();
        this.objectPool.push(Cuphead.getInstance());
    }
    static getInstance() {
        if (this.instance === null)
            this.instance = new GravityFacade();
        return this.instance;
    }
    pull() {
        this.objectPool.forEach((object) => {
            object.drop();
        });
    }
}
GravityFacade.instance = null;
export { GravityFacade };
