import { Html, Head, Main, NextScript } from 'next/document'
import Container from '@mui/material/Container'
import Header from '@/components/Header'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Hacker News</title>
        <meta name="description" content="Hacker News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Header/>

        <Container maxWidth="lg">
          <Main />
        </Container>

        <NextScript />
      </body>
    </Html>
  )
}
