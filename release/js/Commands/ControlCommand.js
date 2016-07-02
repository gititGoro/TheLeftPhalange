"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Command_1 = require('./Command');
var ControlCommand = (function (_super) {
    __extends(ControlCommand, _super);
    function ControlCommand(planeQueue, delta, planeId) {
        _super.call(this);
        this.planeQueue = planeQueue;
        this.delta = delta;
        this.planeId = planeId;
    }
    ControlCommand.prototype.execute = function () {
        var shiftResult = this.planeQueue.AlterPosition(this.planeId, this.delta);
        var result = {
            success: shiftResult,
            retry: false
        };
        return result;
    };
    return ControlCommand;
}(Command_1.Command));
exports.ControlCommand = ControlCommand;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9Db21tYW5kcy9Db250cm9sQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3QkFBcUMsV0FDckMsQ0FBQyxDQUQrQztBQUloRDtJQUFvQyxrQ0FBTztJQUV2Qyx3QkFBb0IsVUFBeUIsRUFDakMsS0FBYSxFQUNiLE9BQWU7UUFDdkIsaUJBQU8sQ0FBQztRQUhRLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFFM0IsQ0FBQztJQUVNLGdDQUFPLEdBQWQ7UUFDSSxJQUFJLFdBQVcsR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRixJQUFJLE1BQU0sR0FBa0I7WUFDeEIsT0FBTyxFQUFFLFdBQVc7WUFDcEIsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCbUMsaUJBQU8sR0FnQjFDO0FBaEJZLHNCQUFjLGlCQWdCMUIsQ0FBQSIsImZpbGUiOiJDb21tYW5kcy9Db250cm9sQ29tbWFuZC5qcyJ9
