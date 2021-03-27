import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

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
export class TopHeadlineComponent implements OnInit {
  requestParams: ITopHeadlineRequest;

  displayLoader: boolean;
  headlineArticles: IArticleWrapper;
  disableLoadMoreBtn: boolean;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.requestParams = {
      page: 1
    };

    this.displayLoader = false;
    this.disableLoadMoreBtn = false;

    this.store.select('topHeadline').subscribe( //TODO: implement selectors
      res => {
        if (!res.topHeadlines && !res.errorMsg) {
          this.fetchTopHeadlines();
        } else if (res.errorMsg) {
          this.displayLoader = false;
          this.disableLoadMoreBtn = true;
        }
        else {
          this.headlineArticles = res.topHeadlines;
          this.displayLoader = false;
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
    this.displayLoader = true;
    this.disableLoadMoreBtn = true;
    this.store.dispatch(TopHeadlineActions.fetchTopHeadlines({ requestParams: { ...this.requestParams } }));
  }
}
