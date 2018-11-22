import { Component, Input } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
    selector: "paDiscountDisplay",
    template: `<div class="bg-info p-a-1">
                The discount is {{discountSrvc.discount}}
               </div>`
})
export class PaDiscountDisplayComponent {
    constructor(private discountSrvc: DiscountService) { }
}
