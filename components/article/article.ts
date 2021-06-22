import {BasicArticleSet} from "./basic/articles";

export type ArticleData = {
  Component: React.ComponentType
  meta: {
    id: string
    name: string
    title?: string
  }
}

export type ArticleSet = {
  id: string
  name: string
  articles: ArticleData[]
}

export const AllArticles = [
  BasicArticleSet,
]