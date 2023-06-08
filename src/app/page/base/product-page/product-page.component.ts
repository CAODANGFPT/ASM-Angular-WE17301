import { Component } from '@angular/core';
interface IProduct {
  id: number;
  image: string;
  content: string;
  priceNew: number;
  priceOld: number;
}
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
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

  cardProducts: IProduct[] = [
    {
      id: 1,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg?v=1468202641487',
      content: 'Giày da Converse cao cấp',
      priceNew: 1200000,
      priceOld: 0,
    },
    {
      id: 2,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg?v=1468202641487',
      content: 'Giày da Converse cao cấp',
      priceNew: 1200000,
      priceOld: 1400000,
    },
    {
      id: 3,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg?v=1468202641487',
      content: 'Giày da Converse cao cấp',
      priceNew: 1200000,
      priceOld: 1400000,
    },
    {
      id: 4,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg?v=1468202641487',
      content: 'Giày da Converse cao cấp',
      priceNew: 1200000,
      priceOld: 1400000,
    },
    {
      id: 5,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg?v=1468202641487',
      content: 'Giày da Converse cao cấp',
      priceNew: 1200000,
      priceOld: 1400000,
    },
    {
      id: 6,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg?v=1468202641487',
      content: 'Giày da Converse cao cấp',
      priceNew: 1200000,
      priceOld: 1400000,
    },
    {
      id: 7,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg?v=1468202641487',
      content: 'Giày da Converse cao cấp',
      priceNew: 1200000,
      priceOld: 1400000,
    },
    {
      id: 8,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg?v=1468202641487',
      content: 'Giày da Converse cao cấp',
      priceNew: 1200000,
      priceOld: 1400000,
    },
  ];
}
