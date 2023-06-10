import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data.docs;
      },
      (error) => console.log(error)
    );
  }
  confirmAndRemoveItem(productId: any) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      this.removeItem(productId);
    }
  }
  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      alert('Bạn đã xóa thành công');
      this.products = this.products.filter((item) => item._id != id);
    });
  }
}
