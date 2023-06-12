import { NewsService } from 'src/app/services/news.service';
import { Component } from '@angular/core';
import { INews } from 'src/app/interfaces/News';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent {
  news: INews[] = [];
  constructor(private NewsService: NewsService) {
    this.NewsService.getNews().subscribe(
      (data: any) => {
        for (let i = 0; i < data.data.length; i++) {
          const date = data.data[i].date
            ? new Date(data.data[i].date)
            : new Date();
          const formattedDate = date.toISOString().split('T')[0];
          data.data[i].date = formattedDate;
        }
        this.news = data.data;
      },
      (error) => console.log(error)
    );
  }
}
