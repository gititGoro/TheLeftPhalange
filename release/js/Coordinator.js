"use strict";
var RunwayPipeLine_1 = require('./EventQueues/RunwayPipeLine');
var CreatePlaneCommands_1 = require('./Commands/CreatePlaneCommands');
var AdvancePlaneCommand_1 = require('./Commands/AdvancePlaneCommand');
var Utils_1 = require('./Utils');
var Mediator = (function () {
    function Mediator(commandQueue, planeQueue, animationRoute, player) {
        this.commandQueue = commandQueue;
        this.planeQueue = planeQueue;
        this.animationRoute = animationRoute;
        this.player = player;
    }
    Mediator.prototype.Start = function (speed, difficulty) {
        this.speed = speed;
        this.StartCommandQueueProductionLine();
        this.StartPlaneGenerator(difficulty);
        this.StartPlaneMover();
    };
    Mediator.prototype.Stop = function (speed) {
        clearInterval(this.commandQueueIntervalId);
        clearInterval(this.planeIntervalId);
        clearInterval(this.planeMoverIntervalId);
        clearInterval(this.planeAnimatorTakeOff);
    };
    Mediator.prototype.StartCommandQueueProductionLine = function () {
        var _this = this;
        this.commandQueueIntervalId = setInterval(function () {
            while (_this.commandQueue.Length() > 0) {
                var result = _this.commandQueue.ExecuteNextCommand();
            }
        }, 5000 * this.speed);
    };
    Mediator.prototype.StartPlaneGenerator = function (difficulty) {
        var _this = this;
        var planeBag;
        difficulty = Math.min(Math.max(0, difficulty), 10);
        var smallPlaneCount = 20 - difficulty;
        var mediumPlaneCount = Utils_1.NumberHelper.toInt(difficulty / 3 * 2);
        var bigPlaneCount = 20 - smallPlaneCount - mediumPlaneCount;
        for (var i = 0; i < smallPlaneCount; i++) {
            var createSmallPlane = new CreatePlaneCommands_1.CreateSmallPlane();
            createSmallPlane.injectPlaneReceiver(this.planeQueue);
            planeBag.push(createSmallPlane);
        }
        for (var i = 0; i < mediumPlaneCount; i++) {
            var createMediumPlane = new CreatePlaneCommands_1.CreateMediumPlane();
            createMediumPlane.injectPlaneReceiver(this.planeQueue);
            planeBag.push(createMediumPlane);
        }
        for (var i = 0; i < bigPlaneCount; i++) {
            var createbiglane = new CreatePlaneCommands_1.CreateBigPlane();
            createbiglane.injectPlaneReceiver(this.planeQueue);
            planeBag.push(createbiglane);
        }
        this.planeIntervalId = setInterval(function () {
            var randomIndex = Utils_1.NumberHelper.randomInt(20, 0);
            _this.commandQueue.AddToBackOfQueue(planeBag[randomIndex]);
        }, 10000 * this.speed);
    };
    Mediator.prototype.StartPlaneMover = function () {
        var _this = this;
        this.planeIntervalId = setInterval(function () {
            var command = new AdvancePlaneCommand_1.AdvancePlaneCommand(_this.planeQueue, 10);
        }, 200);
    };
    Mediator.prototype.StartAnimatorWatch = function () {
        var _this = this;
        this.runway = new RunwayPipeLine_1.RunwayPipeLine(this.commandQueue, this.player, 5, this.animationRoute);
        this.planeAnimatorTakeOff = setInterval(function () {
            if (_this.planeQueue.PendingTakeOff()) {
                var planeResult = _this.planeQueue.PopPlane();
                if (planeResult.result) {
                    _this.runway.ScheduleForTakeOff(planeResult.newPlane);
                }
            }
        }, 1000);
    };
    return Mediator;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9Db29yZGluYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsK0JBQTZCLDhCQUM3QixDQUFDLENBRDBEO0FBQzNELG9DQUFnRixnQ0FDaEYsQ0FBQyxDQUQrRztBQUNoSCxvQ0FBa0MsZ0NBQ2xDLENBQUMsQ0FEaUU7QUFFbEUsc0JBQTJCLFNBRTNCLENBQUMsQ0FGbUM7QUFFcEM7SUFRSSxrQkFBb0IsWUFBMEIsRUFDbEMsVUFBc0IsRUFDdEIsY0FBc0IsRUFDdEIsTUFBYztRQUhOLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ2xDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUMxQixDQUFDO0lBRU0sd0JBQUssR0FBWixVQUFhLEtBQWEsRUFBRSxVQUFrQjtRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSx1QkFBSSxHQUFYLFVBQVksS0FBYTtRQUNyQixhQUFhLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDM0MsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxrREFBK0IsR0FBdkM7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxXQUFXLENBQUM7WUFDdEMsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLE1BQU0sR0FBWSxLQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDakUsQ0FBQztRQUNMLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTyxzQ0FBbUIsR0FBM0IsVUFBNEIsVUFBa0I7UUFBOUMsaUJBNkJDO1FBNUJHLElBQUksUUFBd0IsQ0FBQztRQUM3QixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLGVBQWUsR0FBRyxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBQ3RDLElBQUksZ0JBQWdCLEdBQUcsb0JBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUM3RCxJQUFJLGFBQWEsR0FBRyxFQUFFLEdBQUcsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBRTVELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDL0MsSUFBSSxnQkFBZ0IsR0FBcUIsSUFBSSxzQ0FBZ0IsRUFBRSxDQUFDO1lBQ2hFLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLGlCQUFpQixHQUFzQixJQUFJLHVDQUFpQixFQUFFLENBQUM7WUFDbkUsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZELFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLGFBQWEsR0FBbUIsSUFBSSxvQ0FBYyxFQUFFLENBQUM7WUFDekQsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuRCxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQztZQUMvQixJQUFJLFdBQVcsR0FBRyxvQkFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU8sa0NBQWUsR0FBdkI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksT0FBTyxHQUF3QixJQUFJLHlDQUFtQixDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEYsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVPLHFDQUFrQixHQUExQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxXQUFXLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0MsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FwRkEsQUFvRkMsSUFBQSIsImZpbGUiOiJDb29yZGluYXRvci5qcyJ9
