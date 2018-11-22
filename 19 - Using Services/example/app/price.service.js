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
//import { Model   } 	  from "./repository.model"
//====================
// @Injectable declares a serivce 
// Service can be injected by component or directive for usage
//====================
var PriceSummaryService = (function () {
    function PriceSummaryService() {
    }
    PriceSummaryService.prototype.getSummaryOfPrices = function (listOfPrices) {
        this.prices = listOfPrices;
        return this.deriveSummaryFromPrices();
    };
    PriceSummaryService.prototype.getTotalSumOfPrices = function () {
        var sum = 0;
        this.prices.forEach(function (p) { return sum + p; });
        console.info("total sum of Prices:" + average);
        return sum;
    };
    PriceSummaryService.prototype.getAveragePrice = function () {
        var average = this.getTotalSumOfPrices() / this.prices.length;
        console.info("average Price:" + average);
        return average;
    };
    PriceSummaryService.prototype.deriveSummaryFromPrices = function (prices) {
        this.pricingSummary.totalSum = this.getTotalSumOfPrices();
        this.pricingSummary.count = this.prices.length;
        this.pricingSummary.average = this.getAveragePrice;
        console.info("total count:" + this.pricingSummary.count);
        return this.pricingSummary;
    };
    PriceSummaryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PriceSummaryService);
    return PriceSummaryService;
}());
exports.PriceSummaryService = PriceSummaryService;
