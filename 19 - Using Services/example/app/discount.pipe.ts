import { Pipe, Injectable } from "@angular/core";
import { DiscountService } from "./discount.service";

@Pipe({
    name: "discount",  // name in html
    pure: false
})
//====================
// Pipe transforms DiscountService
//====================
export class PaDiscountPipe {
    constructor(private discountSrvc: DiscountService) { }
	
	//---------------------------------
	// Custom Pipe uses DiscountService to transform the price passed in.
	// transform calls the discount service method applyDiscount 
	// to do the actual transformation
	// Example usage of pipe in productTable.component as per name above
	//   	<td style="vertical-align:middle">
	//			{{item.price | discount | currency:"USD":true }}
    //		</td>
	//---------------------------------	 
    transform(price: number): number 
	{		
        return this.discountSrvc.applyDiscount(price);
    }
}
