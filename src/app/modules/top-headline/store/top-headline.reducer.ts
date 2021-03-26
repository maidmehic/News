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
    })),
    on(TopHeadlineActions.addTopHeadlines, (state, action) => {
        let currentHeadlines = { ...state.topHeadlines }
        currentHeadlines.status = action.headlinesToAdd.status;
        currentHeadlines.totalResults = action.headlinesToAdd.totalResults;
        currentHeadlines.articles = [...currentHeadlines.articles, ...action.headlinesToAdd.articles];

        return {
            ...state,
            errorMsg: null,
            topHeadlines: { ...currentHeadlines }
        }
    })
);

export function topHeadlineReducer(state: State, action: Action) {
    return _topHeadlineReducer(state, action);
}