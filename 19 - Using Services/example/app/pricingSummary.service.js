"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pricingSummary_model_1 = require("./pricingSummary.model");
//====================
// @Injectable/serivce 
// Service can be injected by component or directive for usage
//====================
var PricingSummaryService = (function () {
    function PricingSummaryService() {
        this.priceSummary = new pricingSummary_model_1.PricingSummary;
    }
    //----------------------
    // Provides total, average & count for list of prices
    //-----------------------
    PricingSummaryService.prototype.getSummaryOfPrices = function (listOfPrices) {
        this.prices = [];
        this.prices = listOfPrices;
        this.priceSummary.id = 0; // not displayed
        var totalSum = 0;
        for (var i = 0; i < this.prices.length; i++) {
            totalSum = parseFloat(totalSum) + parseFloat(this.prices[i]);
        }
        var average = 0;
        if (this.prices.length > 0)
            average = parseFloat(totalSum / this.prices.length);
        this.priceSummary.totalSum = totalSum;
        this.priceSummary.average = average;
        this.priceSummary.count = this.prices.length;
        return this.priceSummary;
    };
    PricingSummaryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PricingSummaryService);
    return PricingSummaryService;
}());
exports.PricingSummaryService = PricingSummaryService;
