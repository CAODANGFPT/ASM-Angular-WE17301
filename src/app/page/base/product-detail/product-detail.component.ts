import { Component } from '@angular/core';
interface IProduct {
  id: number;
  image: string;
  content: string;
  priceNew: number;
  priceOld: number;
}
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  valueInput: number = 1;
  
  cardProduct: IProduct = {
    id: 1,
    image:
      'https://bizweb.dktcdn.net/thumb/large/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg?v=1468202641487',
    content: 'Giày da Converse cao cấp',
    priceNew: 1200000,
    priceOld: 0,
  };

  cardProducts: IProduct[] = [
    {
      id: 1,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg?v=1468202641487',
      content: 'Giày da Converse cao cấp',
      priceNew: 1200000,
      priceOld: 1400000,
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
  setValue(e: any) {
    this.valueInput = parseInt(e.target.value);
    if( e.target.value < 1){
      this.valueInput = 1;
    } 
  }


  plus(event: Event){
    event.preventDefault();
    if(this.valueInput < 100){
      this.valueInput += 1;
    }
  }

  minus(event: Event){
    event.preventDefault();
    if(this.valueInput > 1){
      this.valueInput -= 1;
    }
  }
}
