import { Action, createReducer, on } from "@ngrx/store";
import { IArticleWrapper } from "src/app/shared/interfaces/article-wrapper.interface";
import * as TopHeadlineActions from "./top-headline.actions";

export interface State {
    topHeadlines: IArticleWrapper
    errorMsg: string
}

const initialState: State = {
    topHeadlines: null,
    errorMsg: null
};

const _topHeadlineReducer = createReducer(
    initialState,
    on(TopHeadlineActions.fetchTopHeadlinesSuccess, (state, action) => ({
        ...state,
        topHeadlines: { ...action.topHeadlines },
        errorMsg: null
    })),
    on(TopHeadlineActions.fetchTopHeadlinesFail, (state, action) => ({
        ...state,
        errorMsg: action.errorMsg
    }))
);

export function topHeadlineReducer(state: State, action: Action) {
    return _topHeadlineReducer(state, action);
}