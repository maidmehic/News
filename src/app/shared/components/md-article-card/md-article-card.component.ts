import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../interfaces/article.interface';

@Component({
  selector: 'app-md-article-card',
  templateUrl: './md-article-card.component.html',
  styleUrls: ['./md-article-card.component.css']
})
export class MdArticleCardComponent implements OnInit {
  @Input() article: IArticle;
  imageError: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onImgError() {
    this.imageError = true;
  }
}
