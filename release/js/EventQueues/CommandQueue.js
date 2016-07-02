"use strict";
var CommandQueue = (function () {
    function CommandQueue() {
    }
    CommandQueue.prototype.Length = function () {
        return this.queue.length;
    };
    CommandQueue.prototype.ExecuteNextCommand = function () {
        if (this.queue.length > 0) {
            var currentCommand = this.queue.pop();
            try {
                currentCommand.execute();
                return true;
            }
            catch (error) {
                this.errorLog.unshift(error);
                return false;
            }
        }
    };
    CommandQueue.prototype.AddToBackOfQueue = function (command) {
        this.queue.unshift(command);
    };
    CommandQueue.prototype.AddToFrontOfQueue = function (command) {
        this.queue.push(command);
    };
    return CommandQueue;
}());
exports.CommandQueue = CommandQueue;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9FdmVudFF1ZXVlcy9Db21tYW5kUXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBQUE7SUE2QkEsQ0FBQztJQXpCVSw2QkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFTSx5Q0FBa0IsR0FBekI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDO2dCQUNELGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUNBO1lBQUEsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBZ0IsR0FBdkIsVUFBd0IsT0FBZ0I7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLHdDQUFpQixHQUF4QixVQUF5QixPQUFnQjtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLG9CQUFZLGVBNkJ4QixDQUFBIiwiZmlsZSI6IkV2ZW50UXVldWVzL0NvbW1hbmRRdWV1ZS5qcyJ9
