import {GetStaticProps} from 'next'
import {AllArticles} from "../components/article/article";

export default function Index() {
  return null
}

export const getStaticProps: GetStaticProps = async () => {
  const articleSet = AllArticles[0]
  const article = articleSet.articles[0]
  return {
    redirect: {
      destination: `article/${articleSet.id}/${article.meta.id}`,
      permanent: false,
    },
  }
}