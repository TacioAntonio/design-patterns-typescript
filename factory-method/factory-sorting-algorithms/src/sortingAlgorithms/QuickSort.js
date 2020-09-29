"use strict";
exports.__esModule = true;
exports.QuickSort = void 0;
var QuickSort = /** @class */ (function () {
    function QuickSort() {
    }
    QuickSort.prototype.sorting = function (array) {
        if (array.length === 0)
            return [];
        if (array.length === 1)
            return array;
        var pivot = array[0];
        var head = array.filter(function (n) { return n < pivot; });
        var equal = array.filter(function (n) { return n === pivot; });
        var tail = array.filter(function (n) { return n > pivot; });
        return this.sorting(head).concat(equal).concat(this.sorting(tail));
    };
    ;
    return QuickSort;
}());
exports.QuickSort = QuickSort;
