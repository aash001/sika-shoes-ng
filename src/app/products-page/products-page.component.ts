import {Component, OnInit} from "@angular/core";
import {Product} from "../product.model"
import { ShoeServiceService, ProductsResponse } from "../shoe-service.service";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
  error = false
  constructor(private shoeServiceService: ShoeServiceService) {
  }
  ngOnInit() {
    this.shoeServiceService.getProducts().subscribe(products => {
      this.products = products.products;
    });
  }
}
