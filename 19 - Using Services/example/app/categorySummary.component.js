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
var repository_model_1 = require("./repository.model");
var pricingSummary_service_1 = require("./pricingSummary.service");
var PaCategorySummaryComponent = (function () {
    //------------------------------
    // DI services/providers
    //------------------------------	
    function PaCategorySummaryComponent(dataModel, priceSummarySrvc) {
        this.dataModel = dataModel;
        this.priceSummarySrvc = priceSummarySrvc;
        this.summary = new Array();
        this.summaryValues = new Array();
    }
    PaCategorySummaryComponent.prototype.getProducts = function () {
        return this.dataModel.getProducts();
    };
    PaCategorySummaryComponent.prototype.getCategorySummary = function () {
        this.summary.length = 0;
        // extract portion of caption from html to dertermine which
        // categorySummary component will be updated.
        var catNameType = this.caption.replace(" Category Names", "");
        //console.info("catNameType=" + catNameType)
        this.summary.push(this.generateCategorySummary(catNameType));
        return this.summary;
    };
    PaCategorySummaryComponent.prototype.generateCategorySummary = function (catNameType) {
        var products;
        products = this.getProducts();
        this.summaryValues.length = 0;
        for (var i = 0; i < products.length; i++) {
            if (catNameType === "Long") {
                if (products[i].category.length > 6)
                    this.summaryValues.push(products[i].price);
            }
            else if (catNameType === "Short") {
                if (products[i].category.length <= 6)
                    this.summaryValues.push(products[i].price);
            }
            else if (catNameType === "All") {
                this.summaryValues.push(products[i].price);
            }
        }
        this.pricingSummaryResults = this.priceSummarySrvc.getSummaryOfPrices(this.summaryValues);
        return this.pricingSummaryResults;
    };
    __decorate([
        core_1.Input("caption"), 
        __metadata('design:type', String)
    ], PaCategorySummaryComponent.prototype, "caption", void 0);
    PaCategorySummaryComponent = __decorate([
        core_1.Component({
            selector: "paCategorySummary",
            templateUrl: "app/categorySummary.component.html"
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model, pricingSummary_service_1.PricingSummaryService])
    ], PaCategorySummaryComponent);
    return PaCategorySummaryComponent;
}());
exports.PaCategorySummaryComponent = PaCategorySummaryComponent;
