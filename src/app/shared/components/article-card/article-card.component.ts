import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticle } from '../../interfaces/article.interface';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: IArticle;
  @Output() readFullArticleEvent = new EventEmitter<IArticle>();

  constructor() { }

  onReadFullArticleClick() {
    this.readFullArticleEvent.emit(this.article);
  }

  ngOnInit(): void {
  }
}
