import { IArticle } from "./article.interface";

export interface IArticleWrapper {
    status: string,
    totalResults: number,
    articles: IArticle[]
}