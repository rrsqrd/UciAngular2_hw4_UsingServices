import { Injectable } from "@angular/core";
import { Product } from "./product.model";

// ch19 pg 485 changed class to be a Service
@Injectable()
export class SimpleDataSource 
{
    private data: Product[];

	// on contruction services builds a static list of products
    constructor() {
        this.data = new Array<Product>(
            new Product(1, "Kayak", "Watersports", 275),
            new Product(2, "Lifejacket", "Watersports", 48.95),
            new Product(3, "Soccer Ball", "Soccer", 19.50),
            new Product(4, "Corner Flags", "Soccer", 34.95),
            new Product(5, "Thinking Cap", "Chess", 16));
    }

    getData(): Product[] {
        return this.data;
    }
}
