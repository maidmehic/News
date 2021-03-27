import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IArticleRequest } from 'src/app/shared/interfaces/article-request.interface';
import { IArticleWrapper } from 'src/app/shared/interfaces/article-wrapper.interface';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { AppState } from 'src/app/store/app.reducer';
import * as ArticleActions from '../store/article.actions';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit, OnDestroy {
  requestParams: IArticleRequest;
  subscription: Subscription;

  displayLoader: boolean;
  articles: IArticleWrapper;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.store.select('article').subscribe(
      res => {
        this.displayLoader = res.isLoading;
        this.requestParams = { ...res.requestParams };
        this.articles = res.articles;
      }
    )
  }

  onReadFullArticleClick(article: IArticle) {
    this.store.dispatch(ArticleActions.selectArticle({ article }));
    this.router.navigate(['article']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
