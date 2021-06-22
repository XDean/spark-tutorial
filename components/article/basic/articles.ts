import A0, {meta as m0} from './0-introduce.mdx'
import {ArticleData, ArticleSet} from "../article";

const Introduce = {Component: A0, meta: m0}

export const BasicArticles: ArticleData[] = [
  Introduce,
]

export const BasicArticleSet: ArticleSet = {
  id: 'basic',
  name: '基础篇',
  articles: BasicArticles,
}