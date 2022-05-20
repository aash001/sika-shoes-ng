import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsPageComponent } from '../products-page/products-page.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  product?: Product;
  error = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
