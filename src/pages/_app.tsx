import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hacker News</title>
        <meta name="description" content="Hacker News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg">
        <Header />
        <Component {...pageProps} />
      </Container>
    </>
  )
}
