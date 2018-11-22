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
//====================
// Directive that uses Discount Service
//====================
var PaDiscountAmountDirective = (function () {
    //-------------------------------
    // Total of 3 dependencies are injected by DI
    // KeyValueDiffers:
    // 	 -A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
    //   -KeyValueDiffers is a service that tracks changes made to an object over time and 
    //    also expose an API to react to these changes
    //
    // ChangeDetectorRef:
    //   - Every component can get a hold of its associated view through ChangeDetectorRef token.
    //     View is what change detection runs on.
    //     Class methods are used by Angular to detect changes.
    //
    // DiscountService:	
    //    -The service this directive is using to calcluate the discountAmount
    //-------------------------------	
    function PaDiscountAmountDirective(keyValueDiffers, changeDetector, discountSrvc) {
        this.keyValueDiffers = keyValueDiffers;
        this.changeDetector = changeDetector;
        this.discountSrvc = discountSrvc;
    }
    //============================================
    // Directives must take direct responsibility for responding to changes
    // propogated through services via the following Angular ng methods
    //============================================	
    // Here, ngOnInit is using our injected instances of keyValueDiffers and changeDetected.
    // We assign results of the injected instance class methods change detection
    // to local instance 'differ' which is then used in ngDoCheck.
    PaDiscountAmountDirective.prototype.ngOnInit = function () {
        this.differ =
            this.keyValueDiffers.find(this.discountSrvc).create(this.changeDetector);
    };
    //-------------------------	
    // -Angular performs change detection in the context of given component and will invoke its 
    //  ngDoCheck life-cycle hook. Thus ngDoCheck is a good place to add custom 
    //  logic for detecting changes in the state of our components.
    // -Here ngOnChange triggers every time Angular detects a change to our
    //  data-bound input property of 'pa-price' which is aliased as 'originalPrice'
    //-------------------------
    PaDiscountAmountDirective.prototype.ngOnChanges = function (changes) {
        if (changes["originalPrice"] != null) {
            this.updateValue();
        }
    };
    // ngDoCheck allows us to implement our custom change detection.
    // Angular Fires the DoCheck hook after each change detection
    PaDiscountAmountDirective.prototype.ngDoCheck = function () {
        if (this.differ.diff(this.discountSrvc) != null) {
            this.updateValue();
        }
    };
    //---------------------------------
    // UpdateValue applies the discount via discount service 
    // to the original price which is then subtracted from the original price.
    // resulting in the final dicounted price.
    //---------------------------------	
    PaDiscountAmountDirective.prototype.updateValue = function () {
        this.discountAmount =
            this.originalPrice - this.discountSrvc.applyDiscount(this.originalPrice);
    };
    __decorate([
        core_1.Input("pa-price"), 
        __metadata('design:type', Number)
    ], PaDiscountAmountDirective.prototype, "originalPrice", void 0);
    PaDiscountAmountDirective = __decorate([
        core_1.Directive({
            //---------------------------
            // -This Directive is an  attribute directive, (changes appearance or behavior of a single element)
            // -selector specifies how the directive is applied to elements.
            //  here we bind to td element with 'pa-price' name
            //---------------------------	
            selector: "td[pa-price]",
            // exportAs option
            // -The name or names used in a template to assign directive to a variable. 
            // (if multiple names use a comma-separated string)
            exportAs: "discountDirective" // used in productTable html file for td
        }), 
        __metadata('design:paramtypes', [core_1.KeyValueDiffers, core_1.ChangeDetectorRef, discount_service_1.DiscountService])
    ], PaDiscountAmountDirective);
    return PaDiscountAmountDirective;
}());
exports.PaDiscountAmountDirective = PaDiscountAmountDirective;
