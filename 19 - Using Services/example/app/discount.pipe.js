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
var discount_service_1 = require("./discount.service");
var PaDiscountPipe = (function () {
    function PaDiscountPipe(discountSrvc) {
        this.discountSrvc = discountSrvc;
    }
    //---------------------------------
    // Custom Pipe uses DiscountService to transform the price passed in.
    // transform calls the discount service method applyDiscount 
    // to do the actual transformation
    // Example usage of pipe in productTable.component as per name above
    //   	<td style="vertical-align:middle">
    //			{{item.price | discount | currency:"USD":true }}
    //		</td>
    //---------------------------------	 
    PaDiscountPipe.prototype.transform = function (price) {
        return this.discountSrvc.applyDiscount(price);
    };
    PaDiscountPipe = __decorate([
        core_1.Pipe({
            name: "discount",
            pure: false
        }), 
        __metadata('design:paramtypes', [discount_service_1.DiscountService])
    ], PaDiscountPipe);
    return PaDiscountPipe;
}());
exports.PaDiscountPipe = PaDiscountPipe;
