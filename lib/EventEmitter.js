"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
    }
    EventEmitter.prototype.on = function () {
        console.log('On Event');
    };
    EventEmitter.prototype.emit = function () {
        console.log('emit Event');
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map