import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-categori-list',
  templateUrl: './categori-list.component.html',
  styleUrls: ['./categori-list.component.scss'],
})
export class CategoriListComponent {
  categories: ICategory[] = [];
  constructor(private CategoryService: CategoryService) {
    this.CategoryService.getCategory().subscribe(
      (data: any) => {
        this.categories = data.data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
