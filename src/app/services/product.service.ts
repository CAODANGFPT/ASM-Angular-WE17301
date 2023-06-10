import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:8080/api/products`);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:8080/api/products`,product);
  }

  deleteProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:8080/api/products/${id}`);
  }
}
