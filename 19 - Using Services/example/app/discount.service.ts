import { Injectable } from "@angular/core";

//====================
// @Injectable declares this a serivce 
// Service can be injected by component or directive for usage
//====================
@Injectable()
export class DiscountService 
{
    private discountValue: number = 10; 	// discount to be applied
	
    public get discount(): number   		// getter
	{ return this.discountValue;}

    public set discount(newValue: number) 	// setter
	{  this.discountValue = newValue || 0; }

    public applyDiscount(price: number) 	// calculate the discount on price
	{   
		//console.info("\ndiscount.service.applyDiscount:")
	    //console.info("price=" + price)
		//console.info("discountValue=" + this.discountValue);
		//console.info("price - discountValue=" + (price - this.discountValue));
		
		// cacluate discounted price which cannot be less than $5
	    let discountedPrice = Math.max(price - this.discountValue, 5);
		//console.info("discountedPrice=" + discountedPrice);
		
        //return Math.max(price - this.discountValue, 5);
		return discountedPrice;
    }
}
