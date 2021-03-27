import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IArticleWrapper } from 'src/app/shared/interfaces/article-wrapper.interface';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { ITopHeadlineRequest } from 'src/app/shared/interfaces/top-headline-request.interface';
import { AppState } from 'src/app/store/app.reducer';
import * as TopHeadlineActions from './store/top-headline.actions';
import * as ArticleActions from '../article/store/article.actions';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit, OnDestroy {
  requestParams: ITopHeadlineRequest;
  subscription: Subscription;

  displayLoader: boolean;
  headlineArticles: IArticleWrapper;
  disableLoadMoreBtn: boolean;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.requestParams = {
      page: 1
    };

    this.disableLoadMoreBtn = false;

    this.subscription = this.store.select('topHeadline').subscribe( //TODO: implement selectors
      res => {
        if (!res.topHeadlines && !res.isLoading) {
          // this.fetchTopHeadlines();
        } else {
          this.displayLoader = res.isLoading;
          this.headlineArticles = res.topHeadlines;
          this.requestParams = { ...res.requestParams };
          if (res.topHeadlines)
            this.disableLoadMoreBtn = res.topHeadlines.totalResults < 20;
        }
      }
    )
  }

  onLoadMoreButtonClick() {
    this.requestParams.page++;
    this.fetchTopHeadlines();
  }

  onPreviousButtonClick() {
    this.requestParams.page--;
    this.fetchTopHeadlines();
  }

  onReadFullArticleClick(article: IArticle) {
    this.store.dispatch(ArticleActions.selectArticle({ article }));
    this.router.navigate(['article']);
  }

  fetchTopHeadlines() {
    this.disableLoadMoreBtn = true;
    this.store.dispatch(TopHeadlineActions.fetchTopHeadlines({ requestParams: { ...this.requestParams } }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
