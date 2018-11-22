import { Component } from "@angular/core";
//import { Model } 				from "./repository.model";
//import { Product } 			from "./product.model";
//import { ProductFormGroup } 	from "./form.model";

@Component({
    selector: 		"app",
    templateUrl: 	"app/template.html"
})

//----------------------------------
// -In chapter 19, components were changed to be Services including the
//  the Model class, and thus are now injected into the class constructors 
//  where they are being used through Dependency Injection.
// -For completness, the Model service was also pushed into the rest of the
//  application breaking the coupling of the root component (ProductComponent/app)
//  i.e removal of Model object property and it's usage
//  ProductForm no longer has an output or emmitter
//		@Output("paNewProduct") 	newProductEvent = new EventEmitter<Product>();
/// ProductTemplate no longer has an input for model
//		@Input("model") dataModel: Model;
//----------------------------------
export class ProductComponent {
    //model: Model = new Model();

    //constructor(private model: Model) { }

    //addProduct(p: Product) {
    //    this.model.saveProduct(p);
    //}

}
