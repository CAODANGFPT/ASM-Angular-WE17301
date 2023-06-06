import { Component } from '@angular/core';
interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  product: IProduct[] = [
    {
      id: 1,
      name: 'product A',
      price: 1000,
      image:
        'https://bizweb.dktcdn.net/thumb/compact/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'product B',
      price: 1000,
      image:
        'https://bizweb.dktcdn.net/thumb/compact/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg',
      quantity: 1,
    },
  ];
  minus(id: number) {
    const product = this.product.find((item) => item.id === id);
    if (product && product.quantity && product.quantity > 1) {
      product.quantity -= 1;
    }
  }

  plus(id: number) {
    const product = this.product.find((item) => item.id === id);
    if (product && product.quantity) {
      if (product.quantity < 9) {
        product.quantity += 1;
      }
    }
  }
}
