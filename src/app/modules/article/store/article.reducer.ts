import { Action, createReducer, on } from "@ngrx/store";

import * as ArticleActions from "./article.actions";
import { IArticle } from "src/app/shared/interfaces/article.interface";
import { IArticleWrapper } from "src/app/shared/interfaces/article-wrapper.interface";
import { IArticleRequest } from "src/app/shared/interfaces/article-request.interface";

export interface State {
    selectedArticle: IArticle
    isLoading: boolean
    errorMsg: string
    articles: IArticleWrapper
    requestParams: IArticleRequest
}

const initialState: State = {
    selectedArticle: null,
    isLoading: false,
    errorMsg: null,
    articles: null,
    requestParams: null
};

const _articleReducer = createReducer(
    initialState,
    on(ArticleActions.selectArticle, (state, action) => ({
        ...state,
        selectedArticle: { ...action.article },
    })),
    on(ArticleActions.fetchArticles, (state, action) => ({
        ...state,
        isLoading: true,
        requestParams: { ...action.requestParams }
    })),
    on(ArticleActions.fetchArticlesSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        errorMsg: null,
        articles: { ...action.articles }
    })),
    on(ArticleActions.fetchArticlesFail, (state, action) => ({
        ...state,
        isLoading: false,
        errorMsg: action.errorMsg,
        articles: null
    }))
);

export function articleReducer(state: State, action: Action) {
    return _articleReducer(state, action);
}