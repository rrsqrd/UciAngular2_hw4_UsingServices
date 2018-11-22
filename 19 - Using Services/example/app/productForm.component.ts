import { Component } from "@angular/core";
//import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { Product } 				from "./product.model";
import { ProductFormGroup } 	from "./form.model";
import { Model } 				from "./repository.model";

@Component({
    selector: "paProductForm",
    templateUrl: "app/productForm.component.html",
    //styleUrls: ["app/productForm.component.css"],
    //encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {
    form: ProductFormGroup 	= new ProductFormGroup();
    newProduct: Product 	= new Product();
    formSubmitted: boolean 	= false;

	//Declare model dependency
    constructor(private model: Model) { }

	// no longer need for output event emitter
    //@Output("paNewProduct")
    //newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) 
		{
			// Removal of emitter request produtForm must add the newProduct
            // this.newProductEvent.emit(this.newProduct);
			//console.info("newProduct: " + this.newProduct);
            this.model.saveProduct(this.newProduct);
			
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}
