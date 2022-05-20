import {Component, Input} from "@angular/core";
import { ProductsPageComponent } from "../products-page/products-page.component";


@Component({
  selector: "app-product-listing",
  templateUrl: "./product-listing.component.html",
  styleUrls: ["./product-listing.component.css"]
})
export class ProductListingComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
}
