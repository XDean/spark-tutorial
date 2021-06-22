import {AppProps} from "next/dist/pages/_app";
import '../styles/global.css'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>XDean的Spark教程</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
