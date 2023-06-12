import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/Product';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  cardProducts: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((data: any) => {
      this.cardProducts = data.docs;
      console.log(data.docs);
    });
  }
}
