import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/Category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private accessToken: string = '';

  constructor(private http: HttpClient) {
    const user = localStorage.getItem('userData');
    if (user) {
      const response = JSON.parse(user);
      this.accessToken = response.accessToken;
    }
  }

  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://localhost:8080/api/categories`);
  }
}
