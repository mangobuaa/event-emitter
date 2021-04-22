"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EEFactory = void 0;
var EventEmitter_1 = require("./EventEmitter");
var EventEmitterFactory = /** @class */ (function () {
    function EventEmitterFactory() {
        this.instanse = new EventEmitter_1.EventEmitter();
    }
    EventEmitterFactory.prototype.getInstanse = function () {
        if (!this.instanse) {
            this.instanse = new EventEmitter_1.EventEmitter;
        }
        return this.instanse;
    };
    return EventEmitterFactory;
}());
exports.EEFactory = new EventEmitterFactory();
//# sourceMappingURL=index.js.map