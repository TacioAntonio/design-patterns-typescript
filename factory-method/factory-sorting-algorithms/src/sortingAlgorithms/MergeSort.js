"use strict";
exports.__esModule = true;
exports.MergeSort = void 0;
var MergeSort = /** @class */ (function () {
    function MergeSort() {
    }
    MergeSort.prototype.divide = function (items) {
        var halfLength = Math.ceil(items.length / 2);
        var low = items.slice(0, halfLength);
        var high = items.slice(halfLength);
        if (halfLength > 1) {
            low = this.divide(low);
            high = this.divide(high);
        }
        return this.combine(low, high);
    };
    MergeSort.prototype.combine = function (low, high) {
        var indexLow = 0;
        var indexHigh = 0;
        var lengthLow = low.length;
        var lengthHigh = high.length;
        var combined = [];
        while (indexLow < lengthLow || indexHigh < lengthHigh) {
            var lowItem = low[indexLow];
            var highItem = high[indexHigh];
            if (lowItem !== undefined) {
                if (highItem === undefined) {
                    combined.push(lowItem);
                    indexLow++;
                }
                else {
                    if (lowItem <= highItem) {
                        combined.push(lowItem);
                        indexLow++;
                    }
                    else {
                        combined.push(highItem);
                        indexHigh++;
                    }
                }
            }
            else {
                if (highItem !== undefined) {
                    combined.push(highItem);
                    indexHigh++;
                }
            }
        }
        return combined;
    };
    MergeSort.prototype.sorting = function (array) {
        return this.divide(array);
    };
    ;
    return MergeSort;
}());
exports.MergeSort = MergeSort;
