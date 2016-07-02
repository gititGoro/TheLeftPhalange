"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Command_1 = require('./Command');
var Plane_1 = require('../Types/Plane');
var Utils_1 = require('../Utils');
var PlaneCommand = (function (_super) {
    __extends(PlaneCommand, _super);
    function PlaneCommand() {
        _super.apply(this, arguments);
    }
    return PlaneCommand;
}(Command_1.Command));
exports.PlaneCommand = PlaneCommand;
var CreateMediumPlane = (function (_super) {
    __extends(CreateMediumPlane, _super);
    function CreateMediumPlane() {
        _super.apply(this, arguments);
    }
    CreateMediumPlane.prototype.injectPlaneReceiver = function (queue) {
        this.queue = queue;
    };
    CreateMediumPlane.prototype.execute = function () {
        var mediumPlanes = [Plane_1.PlaneSize.mediumCommercial, Plane_1.PlaneSize.smallCommercial, Plane_1.PlaneSize.smallCommercial, Plane_1.PlaneSize.smallCommercial]; // repeat to give more weight to jumbo
        var randomIndex = Utils_1.NumberHelper.randomInt(mediumPlanes.length, 0);
        var plane = {
            size: mediumPlanes[randomIndex],
            distanceFromTakeoff: 500,
            revenue: 600
        };
        if (mediumPlanes[randomIndex] == Plane_1.PlaneSize.smallCommercial) {
            plane.revenue = 400;
        }
        this.queue.PushPlane(plane);
        return {
            success: true,
            retry: false
        };
    };
    return CreateMediumPlane;
}(PlaneCommand));
exports.CreateMediumPlane = CreateMediumPlane;
var CreateBigPlane = (function (_super) {
    __extends(CreateBigPlane, _super);
    function CreateBigPlane() {
        _super.apply(this, arguments);
    }
    CreateBigPlane.prototype.injectPlaneReceiver = function (queue) {
        this.queue = queue;
    };
    CreateBigPlane.prototype.execute = function () {
        var bigPlanes = [Plane_1.PlaneSize.A380, Plane_1.PlaneSize.jumboJet, Plane_1.PlaneSize.jumboJet]; // repeat to give more weight to jumbo
        var randomIndex = Utils_1.NumberHelper.randomInt(bigPlanes.length, 0);
        var plane = {
            size: bigPlanes[randomIndex],
            distanceFromTakeoff: 500,
            revenue: 1000
        };
        if (bigPlanes[randomIndex] == Plane_1.PlaneSize.jumboJet) {
            plane.revenue = 800;
        }
        this.queue.PushPlane(plane);
        return {
            success: true,
            retry: false
        };
    };
    return CreateBigPlane;
}(PlaneCommand));
exports.CreateBigPlane = CreateBigPlane;
var CreateSmallPlane = (function (_super) {
    __extends(CreateSmallPlane, _super);
    function CreateSmallPlane() {
        _super.apply(this, arguments);
    }
    CreateSmallPlane.prototype.injectPlaneReceiver = function (queue) {
        this.queue = queue;
    };
    CreateSmallPlane.prototype.execute = function () {
        var smallPlanes = [Plane_1.PlaneSize.lightPassenger, Plane_1.PlaneSize.fixedWing]; // repeat to give more weight to jumbo
        var randomIndex = Utils_1.NumberHelper.randomInt(smallPlanes.length, 0);
        var plane = {
            size: smallPlanes[randomIndex],
            distanceFromTakeoff: 500,
            revenue: 300
        };
        if (smallPlanes[randomIndex] == Plane_1.PlaneSize.lightPassenger) {
            plane.revenue = 100;
        }
        this.queue.PushPlane(plane);
        return {
            success: true,
            retry: false
        };
    };
    return CreateSmallPlane;
}(PlaneCommand));
exports.CreateSmallPlane = CreateSmallPlane;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9Db21tYW5kcy9DcmVhdGVQbGFuZUNvbW1hbmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdCQUFvQyxXQUNwQyxDQUFDLENBRDhDO0FBRS9DLHNCQUErQixnQkFDL0IsQ0FBQyxDQUQ4QztBQUMvQyxzQkFBMkIsVUFFM0IsQ0FBQyxDQUZvQztBQUVyQztJQUFvQyxnQ0FBTztJQUEzQztRQUFvQyw4QkFBTztJQUkzQyxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKbUMsaUJBQU8sR0FJMUM7QUF5RnlELG9CQUFZLGdCQXpGckU7QUFFRDtJQUFnQyxxQ0FBWTtJQUE1QztRQUFnQyw4QkFBWTtJQTJCNUMsQ0FBQztJQXZCRywrQ0FBbUIsR0FBbkIsVUFBb0IsS0FBb0I7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFFSSxJQUFJLFlBQVksR0FBRyxDQUFDLGlCQUFTLENBQUMsZ0JBQWdCLEVBQUUsaUJBQVMsQ0FBQyxlQUFlLEVBQUUsaUJBQVMsQ0FBQyxlQUFlLEVBQUUsaUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQSxDQUFDLHNDQUFzQztRQUN2SyxJQUFJLFdBQVcsR0FBRyxvQkFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksS0FBSyxHQUFVO1lBQ2YsSUFBSSxFQUFFLFlBQVksQ0FBQyxXQUFXLENBQUM7WUFDL0IsbUJBQW1CLEVBQUUsR0FBRztZQUN4QixPQUFPLEVBQUUsR0FBRztTQUNmLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksaUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3pELEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFD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
