import { EventEmitter } from "./EventEmitter";
var EventEmitterFactory = /** @class */ (function () {
    function EventEmitterFactory() {
        this.instanse = new EventEmitter();
    }
    EventEmitterFactory.prototype.getInstanse = function () {
        if (!this.instanse) {
            this.instanse = new EventEmitter;
        }
        return this.instanse;
    };
    return EventEmitterFactory;
}());
export var EEFactory = new EventEmitterFactory();
//# sourceMappingURL=index.js.map