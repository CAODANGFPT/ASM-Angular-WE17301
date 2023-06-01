import { Component } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  valueInput: string = "";
  setValue(e: any) {
    this.valueInput = e.target.value
  }
}
