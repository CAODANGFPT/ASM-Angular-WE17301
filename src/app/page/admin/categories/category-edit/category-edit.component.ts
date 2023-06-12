import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent {
  [x: string]: any;
  formCategories = this.fb.group({
    _id: [''],
    name: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private CategoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      console.log(id);
      this.CategoryService.getCategoryById(id).subscribe(
        (category: any) => {
          console.log(category);
          this.formCategories.patchValue({
            _id: category._id,
          });
          this.formCategories.patchValue({
            name: category.name,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }

  onHandleSubmit() {
    if (this.formCategories.valid) {
      const Category: ICategory = {
        _id: this.formCategories.get('_id')?.value || '',
        name: this.formCategories.get('name')?.value || '',
      };
      console.log(Category);
      
      this.CategoryService.updateCategory(Category).subscribe((data) => {
        alert('Sửa danh mục thành công');
        this.router.navigate(['/admin/categories']);
      });
    }
  }

}
