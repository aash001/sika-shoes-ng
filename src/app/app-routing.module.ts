import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'product',
    component: ProductPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
