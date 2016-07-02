"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Command_1 = require('./Command');
var AnimateTakeOffCommand = (function (_super) {
    __extends(AnimateTakeOffCommand, _super);
    function AnimateTakeOffCommand(plane, route) {
        _super.call(this);
        this.plane = plane;
        this.route = route;
    }
    AnimateTakeOffCommand.prototype.execute = function () {
        console.log('Animating plane: ' + this.plane.id + ' at route ' + this.route);
        console.log('Revenue: ' + this.plane.revenue);
        var result = {
            success: true,
            retry: false
        };
        return result;
    };
    return AnimateTakeOffCommand;
}(Command_1.Command));
exports.AnimateTakeOffCommand = AnimateTakeOffCommand;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9Db21tYW5kcy9BbmltYXRlVGFrZU9mZkNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXFDLFdBQ3JDLENBQUMsQ0FEK0M7QUFHaEQ7SUFBMkMseUNBQU87SUFFOUMsK0JBQW9CLEtBQVksRUFBVSxLQUFhO1FBQ25ELGlCQUFPLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUV2RCxDQUFDO0lBRU0sdUNBQU8sR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksTUFBTSxHQUFrQjtZQUN4QixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQTtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FmQSxBQWVDLENBZjBDLGlCQUFPLEdBZWpEO0FBZlksNkJBQXFCLHdCQWVqQyxDQUFBIiwiZmlsZSI6IkNvbW1hbmRzL0FuaW1hdGVUYWtlT2ZmQ29tbWFuZC5qcyJ9
