"use strict";
var PricingSummary = (function () {
    function PricingSummary(id, totalSum, count, average) {
        this.id = id;
        this.totalSum = totalSum;
        this.count = count;
        this.average = average;
    }
    return PricingSummary;
}());
exports.PricingSummary = PricingSummary;
