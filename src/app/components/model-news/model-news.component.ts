import { Component } from '@angular/core';

interface ModelNews {
  id: number;
  image: string;
  title: string;
  user: string;
  date: string;
  content: string;
}

@Component({
  selector: 'app-model-news',
  templateUrl: './model-news.component.html',
  styleUrls: ['./model-news.component.scss'],
})
export class ModelNewsComponent {
  news: number = 1;
  expression: any;
  public right() {
    this.news++;
    if (this.news > 3) {
      this.news = 1;
    }
    const element = document.getElementById(
      'news' + this.news
    ) as HTMLInputElement;
    element.checked = true;
    console.log(this.news);
  }

  public left() {
    this.news--;
    if (this.news < 1) {
      this.news = 3;
    }
    const element = document.getElementById(
      'news' + this.news
    ) as HTMLInputElement;
    element.checked = true;
    console.log(this.news);
  }

  modelNews: ModelNews[] = [
    {
      id: 1,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/articles/anh1.png?v=1466158653610',
      title: 'Chọn giày thể thao cho bạn gái nữ tính',
      user: 'Nguyễn Ngọc Dũng',
      date: '28/05/2016',
      content:
        'Giày thể thao đang là phụ kiện không thể thiếu trong tủ giày dép của các bạn gái. Những đôi giày thể thao với thiết kế đa dạng, nhiều màu sắc thường được phái đẹp lựa chọn. Những đôi giày th...',
    },
    {
      id: 2,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/articles/anh2.png?v=1466158653610',
      title: 'Giới trẻ sốt rần rần với giày Converse Chuck II',
      user: 'Nguyễn Ngọc Dũng',
      date: '27/05/2016',
      content:
        '  Chuck II, "hậu duệ" của mẫu giày Chuck Taylor 98 năm tuổi đình đám đang là từ khóa "hot" nhất trong từ điển của các bạn trẻ Việt mê giày những ngày qua. 28/7 vừa qua, thương hiệu Converse đã c...',
    },
    {
      id: 3,
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/articles/anh3.png?v=1466158653610',
      title: "'Bí kíp' phân biệt giày Converse thật hay giả",
      user: 'Nguyễn Ngọc Dũng',
      date: '24/05/2016',
      content:
        ' Giày Converse thật thường có giá khá cao, xứng tầm với thương hiệu và chất lượng của nó. Hiện nay trên thị trường giày, một đôi Converse hàng hiệu chính hãng thường có giá dao động từ 500.000 đến x...',
    },
  ];
}
