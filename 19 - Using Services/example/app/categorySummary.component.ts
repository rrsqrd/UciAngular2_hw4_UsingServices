import { Component, Input} from "@angular/core";
import { Model } 	from "./repository.model";
import { Product } 	from "./product.model";

import { PricingSummary } 			from "./pricingSummary.model"
import { PricingSummaryService } 	from "./pricingSummary.service";

	
@Component({
    selector: 		"paCategorySummary",
    templateUrl: 	"app/categorySummary.component.html"
})

export class PaCategorySummaryComponent
{	
	private summary : PricingSummary[] new Array<PricingSummary>()	
	private pricingSummaryResults: PricingSummary;
	
	private summaryValues:   number[] new Array<number>();	

	@Input("caption") 
	caption: string;
		
	//------------------------------
	// DI services/providers
	//------------------------------	
	constructor( private dataModel: Model,
				 private priceSummarySrvc: PricingSummaryService) {}
	
	getProducts(): Product[] {		
        return this.dataModel.getProducts();
    }

    public getCategorySummary(): PricingSummary[]
	{	
		this.summary.length=0;	

		// extract portion of caption from html to dertermine which
		// categorySummary component will be updated.
		let catNameType = this.caption.replace(" Category Names", "");
		//console.info("catNameType=" + catNameType)
		this.summary.push(this.generateCategorySummary(catNameType));
				
		return this.summary;
    }	
	
    private generateCategorySummary(catNameType : string): PricingSummary
	{
		let products: Product[];
		products = this.getProducts();

		this.summaryValues.length=0;
		
		for(var i=0; i < products.length; i++)
		{		
			if(catNameType === "Long")
			{
				if(products[i].category.length > 6)
					this.summaryValues.push(products[i].price);
			}
			else if (catNameType === "Short")
			{
				if(products[i].category.length <= 6)
					this.summaryValues.push(products[i].price);			
			}
			else  if (catNameType === "All")
			{			
				this.summaryValues.push(products[i].price)
			}
		}		
		
		this.pricingSummaryResults = this.priceSummarySrvc.getSummaryOfPrices(this.summaryValues);	
        return this.pricingSummaryResults;				
    }	
}
