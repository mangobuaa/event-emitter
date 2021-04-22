import { EventEmitter } from "./EventEmitter";
declare class EventEmitterFactory {
    private instanse;
    constructor();
    getInstanse(): EventEmitter;
}
export declare const EEFactory: EventEmitterFactory;
export {};
