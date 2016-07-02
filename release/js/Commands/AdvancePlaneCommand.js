"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Command_1 = require('./Command');
var AdvancePlaneCommand = (function (_super) {
    __extends(AdvancePlaneCommand, _super);
    function AdvancePlaneCommand(queue, distanceDelta) {
        _super.call(this);
        this.queue = queue;
        this.distanceDelta = distanceDelta;
    }
    AdvancePlaneCommand.prototype.execute = function () {
        this.queue.AdvancePlanes(-this.distanceDelta);
        var result = {
            success: true,
            retry: false
        };
        return result;
    };
    return AdvancePlaneCommand;
}(Command_1.Command));
exports.AdvancePlaneCommand = AdvancePlaneCommand;
1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9Db21tYW5kcy9BZHZhbmNlUGxhbmVDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHdCQUFxQyxXQUVyQyxDQUFDLENBRitDO0FBRWhEO0lBQXlDLHVDQUFPO0lBQzVDLDZCQUFvQixLQUFvQixFQUFVLGFBQWE7UUFDM0QsaUJBQU8sQ0FBQztRQURRLFVBQUssR0FBTCxLQUFLLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtJQUUvRCxDQUFDO0lBRU0scUNBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksTUFBTSxHQUFrQjtZQUN4QixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FiQSxBQWFDLENBYndDLGlCQUFPLEdBYS9DO0FBYlksMkJBQW1CLHNCQWEvQixDQUFBO0FBQ0QsQ0FBQyxDQUFBIiwiZmlsZSI6IkNvbW1hbmRzL0FkdmFuY2VQbGFuZUNvbW1hbmQuanMifQ==
