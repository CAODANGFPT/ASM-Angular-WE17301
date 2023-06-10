import { Component } from '@angular/core';

@Component({
  selector: 'app-categori-edit',
  templateUrl: './categori-edit.component.html',
  styleUrls: ['./categori-edit.component.scss']
})
export class CategoriEditComponent {
  valueInput: string = "";
  setValue(e: any) {
    this.valueInput = e.target.value
  }
}
