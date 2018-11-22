import {Directive, HostBinding, Input, SimpleChange, 
		KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef} from "@angular/core";	
import { DiscountService } from "./discount.service";

//====================
// Directive that uses Discount Service
//====================
@Directive({
	//---------------------------
	// -This Directive is an  attribute directive, (changes appearance or behavior of a single element)
	// -selector specifies how the directive is applied to elements.
	//  here we bind to td element with 'pa-price' name
	//---------------------------	
    selector: "td[pa-price]",
	
	// exportAs option
	// -The name or names used in a template to assign directive to a variable. 
	// (if multiple names use a comma-separated string)
    exportAs: "discountDirective"  // used in productTable html file for td
})

export class PaDiscountAmountDirective 
{
	// local instance 
    private differ: KeyValueDiffer;

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
    constructor(private keyValueDiffers: KeyValueDiffers,
				private changeDetector:  ChangeDetectorRef,
				private discountSrvc:    DiscountService) { }

	
	// -Input received from td element bound to pa-price
	//  with an aliased name of 'originalPrice'
	// -Thus original item.price value is passed as pa-price from template
	//	[pa-price]="item.price" 
    @Input("pa-price")		
    originalPrice: number;	

	//---------------------------------------
	// -discountAmount is the property used to store the 
	//  price with the actual discount applied to it.
	// -property/value that will be displayed through 
	//  the discountService which this directive uses.
	//
	// -The exportAs property of 'discountDirective' is used in the productTable template
	//  A template variable named #discountD is used which has a reference this directive.
	// 	(using unique names for clarity of whats doing what)
    //    <td style="vertical-align:middle" [pa-price]="item.price" 
    //            #discountD="discountDir">
    //        {{ discountD.discountAmount | currency:"USD": true }}
    //    </td>	
	//---------------------------------------	
    discountAmount: number;

	//============================================
	// Directives must take direct responsibility for responding to changes
	// propogated through services via the following Angular ng methods
	//============================================	
	
	// Here, ngOnInit is using our injected instances of keyValueDiffers and changeDetected.
	// We assign results of the injected instance class methods change detection
	// to local instance 'differ' which is then used in ngDoCheck.
    ngOnInit() {
        this.differ =
            this.keyValueDiffers.find(this.discountSrvc).create(this.changeDetector);
    }

	//-------------------------	
	// -Angular performs change detection in the context of given component and will invoke its 
	//  ngDoCheck life-cycle hook. Thus ngDoCheck is a good place to add custom 
	//  logic for detecting changes in the state of our components.
	// -Here ngOnChange triggers every time Angular detects a change to our
	//  data-bound input property of 'pa-price' which is aliased as 'originalPrice'
	//-------------------------
    ngOnChanges(changes: { [property: string]: SimpleChange }) 
	{
        if (changes["originalPrice"] != null) {
            this.updateValue();
        }
    }

	// ngDoCheck allows us to implement our custom change detection.
	// Angular Fires the DoCheck hook after each change detection
    ngDoCheck() 
	{
        if (this.differ.diff(this.discountSrvc) != null) 
		{
            this.updateValue();
        }
    }

	//---------------------------------
	// UpdateValue applies the discount via discount service 
	// to the original price which is then subtracted from the original price.
	// resulting in the final dicounted price.
	//---------------------------------	
    private updateValue() 
	{
        this.discountAmount = 
			this.originalPrice - this.discountSrvc.applyDiscount(this.originalPrice);
    }
}
