import { ActionReducerMap } from '@ngrx/store';
import * as fromTopHeadlines from '../modules/top-headline/store/top-headline.reducer';

export interface AppState {
    topHeadline: fromTopHeadlines.State
}

export const appReducer: ActionReducerMap<AppState> = {
    topHeadline: fromTopHeadlines.topHeadlineReducer
};