"use strict";
exports.__esModule = true;
var index_1 = require("./sortingAlgorithms/index");
var FactorySortingAlgorithms = /** @class */ (function () {
    function FactorySortingAlgorithms() {
        this.sortingAlgorithm = {
            bubbleSort: index_1.BubbleSort,
            mergeSort: index_1.MergeSort,
            quickSort: index_1.QuickSort
        };
    }
    FactorySortingAlgorithms.prototype.createSorting = function (sorting) {
        return new this.sortingAlgorithm[sorting]();
    };
    return FactorySortingAlgorithms;
}());
var factorySortingAlgorithms = new FactorySortingAlgorithms();
var q = factorySortingAlgorithms.createSorting('bubbleSort').sorting([8, 5, 6, 95, 62]);
console.log(q);
