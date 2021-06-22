import Link from 'next/link'
import clsx from "clsx";
import {ArticleData, ArticleSet} from "./article/article";
import css from './TOC.module.css'

type Props = {
  articleSet: ArticleSet
  article: ArticleData
}

export const TOC = (props: Props) => {
  return (
    <div className={'flex flex-row h-full relative'}>
      <ul className={'text-xl'}>
        {props.articleSet.articles.map(e => (
          <li key={e.meta.id}>
            <Link href={`/article/${props.articleSet.id}/${e.meta.id}`}>
              <div className={clsx(css.item, e.meta.id === props.article.meta.id ? css.activeItem : css.inactiveItem)}>
                {e.meta.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}