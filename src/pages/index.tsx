import Head from 'next/head'
import NewsList from '@/components/NewsList'
import { getNews } from '@/helpers/api'
import { NewsFields } from '@/types'

export default function Home({ news }: { news: NewsFields[] }) {
  return (
    <>
      <Head>
        <title>Hacker News - News List</title>
      </Head>

      <main>
        <NewsList items={news}/>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const news = await getNews()

  return {
    props: { news }
  }
}

