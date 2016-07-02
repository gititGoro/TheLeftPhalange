"use strict";
var NumberHelper = (function () {
    function NumberHelper() {
    }
    NumberHelper.randomInt = function (range, offset) {
        return NumberHelper.toInt((Math.random() * range + offset));
    };
    NumberHelper.toInt = function (number) {
        return parseInt((number).toFixed(0));
    };
    return NumberHelper;
}());
exports.NumberHelper = NumberHelper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtJQVFBLENBQUM7SUFQaUIsc0JBQVMsR0FBdkIsVUFBd0IsS0FBYSxFQUFFLE1BQWM7UUFDakQsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVhLGtCQUFLLEdBQW5CLFVBQW9CLE1BQWM7UUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxtQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBRU8sb0JBQVksZ0JBRm5CO0FBRW9CIiwiZmlsZSI6IlV0aWxzLmpzIn0=
