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
export { EventEmitter };
//# sourceMappingURL=EventEmitter.js.map