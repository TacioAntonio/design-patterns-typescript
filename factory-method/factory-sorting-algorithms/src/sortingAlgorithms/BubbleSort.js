"use strict";
exports.__esModule = true;
exports.BubbleSort = void 0;
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.prototype.sorting = function (array) {
        var _a;
        array = array.slice();
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
                }
            }
        }
        return array;
    };
    ;
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
