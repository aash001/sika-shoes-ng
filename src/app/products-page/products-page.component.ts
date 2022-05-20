import {Component, OnInit} from "@angular/core";
import {Product} from "../product.model"
import { ShoeServiceService } from "../shoe-service.service";
import { ActivatedRoute, RouteConfigLoadEnd } from "@angular/router";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
  error = false
  constructor(private shoeServiceService: ShoeServiceService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.shoeServiceService.getProducts().subscribe(products => {
      this.products = products.products;
    });
  }
}
