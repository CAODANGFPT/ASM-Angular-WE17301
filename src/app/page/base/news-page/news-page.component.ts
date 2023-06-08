import { Component } from '@angular/core';
interface INews {
  id?: number;
  title: string;
  content: string;
  author: string;
  image: string;
  created_at: string;
}
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent {
  cardNews: INews[] = [
    {
      id: 1,
      title: 'Chọn giày thể thao cho bạn gái nữ tính',
      content:
        'Giày thể thao đang là phụ kiện không thể thiếu trong tủ giày dép của các bạn gái. Những đôi giày thể thao với thiết kế đa dạng, nhiều màu sắc thường được phái đẹp lựa chọn. Những đôi giày thể thao mang phong cách trẻ trung.',
      author: 'Nguyễn Văn A',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/articles/anh2.png?v=1466158653610',
      created_at: '03-06-2023',
    },
    {
      id: 2,
      title: 'Giới trẻ sốt rần rần với giày Converse Chuck II',
      content:
        'Chuck II, "hậu duệ" của mẫu giày Chuck Taylor 98 năm tuổi đình đám đang là từ khóa "hot" nhất trong từ điển của các bạn trẻ Việt mê giày những ngày qua. 28/7 vừa qua, thương hiệu Converse đã chính thức ra mắt Chuck II.',
      author: 'Nguyễn Văn B',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/articles/anh1.png?v=1466157783620',
      created_at: ' 27/05/2016',
    },
    {
      id: 3,
      title: 'Bí kíp phân biệt giày Converse thật hay giả',
      content:
        'Giày thể thao đang là phụ kiện không thể thiếu trong tủ giày dép của các bạn gái. Những đôi giày thể thao với thiết kế đa dạng, nhiều màu sắc thường được phái đẹp lựa chọn. Những đôi giày thể thao mang phong cách trẻ trung.',
      author: 'Nguyễn Văn A',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/articles/anh3.png?v=1466157559277',
      created_at: '29/05/2015',
    },
    {
      id: 4,
      title: 'Chọn giày thể thao cho bạn gái nữ tính',
      content:
        'Giày Converse thật thường có giá khá cao, xứng tầm với thương hiệu và chất lượng của nó. Hiện nay trên thị trường giày, một đôi Converse hàng hiệu chính hãng thường có giá dao động từ 500.000 đến xấp xỉ 1.500.000.',
      author: 'Nguyễn Văn A',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/091/132/articles/anh2.png?v=1466158653610',
      created_at: '03-06-2023',
    },
  ];
}
