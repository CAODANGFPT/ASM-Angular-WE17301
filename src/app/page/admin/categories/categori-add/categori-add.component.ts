import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';
import { ICategory } from '../../../../interfaces/Category';
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
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  formCategory = this.fb.group({
    name: ['', [Validators.required]],
  });
  onHandleSubmit() {
    if (this.formCategory.valid) {
      const category: ICategory = {
        name: this.formCategory.get('name')?.value || '',
      };
      this.categoryService.addCategory(category).subscribe(
        (data) => {
          alert('Thêm danh mục thành công');
          this.router.navigate(['/admin/categories']);
        },
        (error) => console.log(error.message)
      );
    }
  }
}
