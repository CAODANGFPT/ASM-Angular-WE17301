import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INews } from '../interfaces/News';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}
  addNews(news: INews): Observable<INews> {
    return this.http.post<INews>(`http://localhost:8080/api/news`, news);
  }

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
}
