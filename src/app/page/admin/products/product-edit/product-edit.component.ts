import { Component } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  valueInput: string = "";
  setValue(e: any) {
    this.valueInput = e.target.value
  }
}
