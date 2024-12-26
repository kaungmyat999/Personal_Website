import Head from 'next/head'
import '../styles/global.css'
export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>George's Personal Website</title>
    </Head>  
    <Component {...pageProps} />
  </>
}  
