import { EventEmitter } from "./EventEmitter";

class EventEmitterFactory {
    private instanse: EventEmitter;

    constructor () {
        this.instanse = new EventEmitter();
    }
    public getInstanse () {
        if (!this.instanse) {
            this.instanse = new EventEmitter;
        }
        return this.instanse;
    }
}

export const EEFactory = new EventEmitterFactory();