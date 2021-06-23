import {AllArticles} from "../components/article/article";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const articleSet = AllArticles[0]
    const article = articleSet.articles[0]
    router.replace(`/article/spark/${articleSet.id}/${article.meta.id}`)
  })
  return null
}