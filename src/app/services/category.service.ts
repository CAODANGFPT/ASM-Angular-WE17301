import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/Category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://localhost:8080/api/categories`);
  }
  
  addCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(
      `http://localhost:8080/api/categories`,
      category
    );
  }

  deleteCategory(id: number | string): Observable<ICategory> {
    return this.http.delete<ICategory>(
      `http://localhost:8080/api/categories/${id}`
    );
  }
}
