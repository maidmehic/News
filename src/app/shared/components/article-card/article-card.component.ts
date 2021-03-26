import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../interfaces/article.interface';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: IArticle;

  constructor() { }

  ngOnInit(): void {
  }

}
