import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';
import { TopHeadlineService } from './services/top-headline.service';
import * as TopHeadlineActions from './store/top-headline.actions';
@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {

  displayLoader: boolean;
  constructor(private headlineService: TopHeadlineService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.displayLoader = false;
    this.store.select('topHeadline').subscribe(
      res => {
        if (!res.topHeadlines) {
          this.fetchTopHeadlines();
        } else {
          this.displayLoader = false;
        }
      }
    )
  }

  fetchTopHeadlines() {
    this.displayLoader = true;
    this.store.dispatch(TopHeadlineActions.fetchTopHeadlines());
  }

}
