import { Component } from '@angular/core';

@Component({
  selector: 'app-categori-add',
  templateUrl: './categori-add.component.html',
  styleUrls: ['./categori-add.component.scss'],
})
export class CategoriAddComponent {
  valueInput: string = '';
  setValue(e: any) {
    this.valueInput = e.target.value;
  }
}
