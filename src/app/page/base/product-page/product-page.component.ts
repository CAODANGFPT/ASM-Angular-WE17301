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
  counter: number = 1;
  slide = setInterval(() => {
    const element = document.getElementById(
      'radio' + this.counter
    ) as HTMLInputElement;
    element.checked = true;
    this.counter++;
    if (this.counter > 3) {
      this.counter = 1;
    }
  }, 5000);

  product: number = 1;
  expression: any;
  public right() {
    this.product++;
    if (this.product > 3) {
      this.product = 1;
    }
    const element = document.getElementById(
      'product' + this.product
    ) as HTMLInputElement;
    element.checked = true;
    console.log(this.product);
  }

  public left() {
    this.product--;
    if (this.product < 1) {
      this.product = 3;
    }
    const element = document.getElementById(
      'product' + this.product
    ) as HTMLInputElement;
    element.checked = true;
    console.log(this.product);
  }
}
