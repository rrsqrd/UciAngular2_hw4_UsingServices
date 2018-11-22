import { Injectable } 		from "@angular/core";
import { PricingSummary } 	from "./pricingSummary.model"

//====================
// @Injectable/serivce 
// Service can be injected by component or directive for usage
//====================
@Injectable()
export class PricingSummaryService 
{
    private priceSummary : PricingSummary = new PricingSummary;
	private prices : number[] ;

	//----------------------
	// Provides total, average & count for list of prices
	//-----------------------
    public getSummaryOfPrices(listOfPrices: number[]): PricingSummary 
	{ 
		this.prices=[];
		this.prices=listOfPrices;

		this.priceSummary.id= 0;     // not displayed

		let totalSum = 0;
		for(var i=0; i < this.prices.length; i++)
		{
			totalSum = parseFloat(totalSum) + parseFloat(this.prices[i]);			
		}		

		let average = 0;
		if(this.prices.length > 0)
			average= parseFloat(totalSum/this.prices.length);
		
		this.priceSummary.totalSum = totalSum;
       	this.priceSummary.average  = average;
		this.priceSummary.count    = this.prices.length;
				
		return this.priceSummary;
	}
}
