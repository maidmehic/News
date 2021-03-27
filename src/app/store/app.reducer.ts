import { ActionReducerMap } from '@ngrx/store';
import * as fromTopHeadlines from '../modules/top-headline/store/top-headline.reducer';
import * as fromArticles from '../modules/article/store/article.reducer';
export interface AppState {
    topHeadline: fromTopHeadlines.State
    article: fromArticles.State
}

export const appReducer: ActionReducerMap<AppState> = {
    topHeadline: fromTopHeadlines.topHeadlineReducer,
    article: fromArticles.articleReducer
};