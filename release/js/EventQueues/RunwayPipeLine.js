"use strict";
var AnimateTakeOffCommand_1 = require('../Commands/AnimateTakeOffCommand');
var RunwayPipeLine = (function () {
    function RunwayPipeLine(commandQueue, player, delayFactor, animationRoute) {
        this.commandQueue = commandQueue;
        this.player = player;
        this.delayFactor = delayFactor;
        this.animationRoute = animationRoute;
        this.startProductionLine();
    }
    RunwayPipeLine.prototype.ScheduleForTakeOff = function (plane) {
        var turbulenceDelay = 0;
        if (this.takeOffQueue.length > 0) {
            turbulenceDelay = (this.takeOffQueue[0].plane.size - plane.size)
                * (this.takeOffQueue[0].turbulenceDelay + this.delayFactor);
            turbulenceDelay = Math.max(0, turbulenceDelay);
        }
        var taxi = {
            turbulenceDelay: turbulenceDelay,
            plane: plane
        };
        this.takeOffQueue.unshift(taxi);
    };
    RunwayPipeLine.prototype.startProductionLine = function () {
        var _this = this;
        setInterval(function () {
            if (_this.takeOffQueue.length > 0) {
                var lastIndex = _this.takeOffQueue.length - 1;
                _this.takeOffQueue[lastIndex].turbulenceDelay--;
                if (_this.takeOffQueue[lastIndex].turbulenceDelay <= 0) {
                    var readyTaxi = _this.takeOffQueue.pop();
                    var animationCommand = new AnimateTakeOffCommand_1.AnimateTakeOffCommand(readyTaxi.plane, _this.animationRoute);
                    _this.commandQueue.AddToBackOfQueue(animationCommand);
                    _this.player.revenue += readyTaxi.plane.revenue;
                }
            }
        }, 1000);
    };
    return RunwayPipeLine;
}());
exports.RunwayPipeLine = RunwayPipeLine;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9FdmVudFF1ZXVlcy9SdW53YXlQaXBlTGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0Esc0NBQW9DLG1DQUVwQyxDQUFDLENBRnNFO0FBT3ZFO0lBSUksd0JBQW9CLFlBQTBCLEVBQ2xDLE1BQWMsRUFDZCxXQUFtQixFQUNuQixjQUFzQjtRQUhkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQUM5QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sMkNBQWtCLEdBQXpCLFVBQTBCLEtBQVk7UUFDbEMsSUFBSSxlQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7a0JBQzFELENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hFLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsSUFBSSxJQUFJLEdBQWlCO1lBQ3JCLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyw0Q0FBbUIsR0FBM0I7UUFBQSxpQkFjQztRQWJHLFdBQVcsQ0FBQztZQUNSLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDL0MsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxTQUFTLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDeEMsSUFBSSxnQkFBZ0IsR0FDaEIsSUFBSSw2Q0FBcUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDcEUsS0FBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNyRCxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDbkQsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDO0lBRUwscUJBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNZLHNCQUFjLGlCQXlDMUIsQ0FBQSIsImZpbGUiOiJFdmVudFF1ZXVlcy9SdW53YXlQaXBlTGluZS5qcyJ9
