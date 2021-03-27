import { Action, createReducer, on } from "@ngrx/store";
import { IArticleWrapper } from "src/app/shared/interfaces/article-wrapper.interface";
import { ITopHeadlineRequest } from "src/app/shared/interfaces/top-headline-request.interface";
import * as TopHeadlineActions from "./top-headline.actions";

export interface State {
    topHeadlines: IArticleWrapper
    errorMsg: string
    isLoading: boolean
    requestParams: ITopHeadlineRequest
}

const initialState: State = {
    topHeadlines: null,
    errorMsg: null,
    isLoading: false,
    requestParams: null
};

const _topHeadlineReducer = createReducer(
    initialState,
    on(TopHeadlineActions.fetchTopHeadlines, (state, action) => ({
        ...state,
        isLoading: true,
        requestParams: { ...action.requestParams }
    })),
    on(TopHeadlineActions.fetchTopHeadlinesSuccess, (state, action) => ({
        ...state,
        topHeadlines: { ...action.topHeadlines },
        errorMsg: null,
        isLoading: false
    })),
    on(TopHeadlineActions.fetchTopHeadlinesFail, (state, action) => ({
        ...state,
        errorMsg: action.errorMsg,
        isLoading: false,
        topHeadlines: null
    }))
);

export function topHeadlineReducer(state: State, action: Action) {
    return _topHeadlineReducer(state, action);
}