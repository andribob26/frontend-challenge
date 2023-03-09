import { IArticle } from "./IArticle";

export interface IResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
