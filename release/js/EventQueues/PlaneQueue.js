"use strict";
var Utils_1 = require('../Utils');
var PlaneQueue = (function () {
    function PlaneQueue() {
    }
    PlaneQueue.prototype.PushPlane = function (plane) {
        if (this.planes.length < this.maxSize) {
            plane.id = this.GetNextId();
            this.planes.unshift(plane);
        }
    };
    PlaneQueue.prototype.PopPlane = function () {
        this.planes = this.planes.sort(function (leftPlane, rightPlane) {
            return leftPlane.distanceFromTakeoff - rightPlane.distanceFromTakeoff;
        });
        if (this.planes.length > 0)
            return { newPlane: this.planes.pop(), result: true };
        return { newPlane: null, result: false };
    };
    PlaneQueue.prototype.AlterPosition = function (planeId, distanceDelta) {
        var found = false;
        this.planes.forEach(function (plane) {
            if (plane.id == planeId) {
                found = true;
                plane.distanceFromTakeoff += distanceDelta;
            }
        });
        return found;
    };
    PlaneQueue.prototype.AdvancePlanes = function (distanceDelta) {
        for (var i = 0; i < this.planes.length; i++) {
            this.AlterPosition(this.planes[i].id, distanceDelta);
        }
    };
    PlaneQueue.prototype.PendingTakeOff = function () {
        var planesToTakeOff = this.planes.filter(function (plane) {
            return plane.distanceFromTakeoff <= 0;
        });
        return planesToTakeOff.length > 0;
    };
    PlaneQueue.prototype.GetNextId = function () {
        var randomId = Utils_1.NumberHelper.randomInt(this.maxSize * 100000, 0); //big range to minimize collisions
        var found = false;
        do {
            found = false;
            for (var i = 0; i < this.planes.length; i++) {
                if (this.planes[i].id == randomId) {
                    found = true;
                    randomId = Utils_1.NumberHelper.randomInt(this.maxSize * 100000, 0);
                }
            }
        } while (found);
        return randomId;
    };
    return PlaneQueue;
}());
exports.PlaneQueue = PlaneQueue;
//add accessibility interfaces 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9FdmVudFF1ZXVlcy9QbGFuZVF1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQkFBMkIsVUFFM0IsQ0FBQyxDQUZvQztBQXNCckM7SUFBQTtJQTJEQSxDQUFDO0lBdkRVLDhCQUFTLEdBQWhCLFVBQWlCLEtBQVk7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFFTSw2QkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLFNBQVMsRUFBRSxVQUFVO1lBQ2pELE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDLG1CQUFtQixDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN6RCxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sa0NBQWEsR0FBcEIsVUFBcUIsT0FBZSxFQUFFLGFBQXFCO1FBQ3ZELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUs7WUFDL0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNiLEtBQUssQ0FBQyxtQkFBbUIsSUFBSSxhQUFhLENBQUM7WUFDL0MsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sa0NBQWEsR0FBcEIsVUFBcUIsYUFBcUI7UUFDdEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNMLENBQUM7SUFFTSxtQ0FBYyxHQUFyQjtRQUNJLElBQUksZUFBZSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSztZQUNwRCxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sOEJBQVMsR0FBakI7UUFDSSxJQUFJLFFBQVEsR0FBRyxvQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztRQUNuRyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsR0FBRyxDQUFDO1lBQ0EsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNkLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDMUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDaEMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDYixRQUFRLEdBQUcsb0JBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxRQUFRLEtBQUssRUFBRTtRQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDTCxpQkFBQztBQUFELENBM0RBLEFBMkRDLElBQUE7QUFHa0Qsa0JBQVUsY0FINUQ7QUFLRCw4QkFBOEIiLCJmaWxlIjoiRXZlbnRRdWV1ZXMvUGxhbmVRdWV1ZS5qcyJ9
