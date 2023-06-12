import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { INews } from '../interfaces/News';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`http://localhost:8080/api/news`);
  }

  getNewsById(id: string): Observable<INews> {
    return this.http.get<INews>(`http://localhost:8080/api/news/${id}`);
  }

  updateNews(news: INews): Observable<INews> {
    return this.http.put<INews>(
      `http://localhost:8080/api/news/${news._id}`,
      news
    );
  }
  
  deleteNews(id: number | string): Observable<INews> {
    return this.http.delete<INews>(`http://localhost:8080/api/news/${id}`);
  }
}
