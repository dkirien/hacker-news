import Head from 'next/head'
import NewList from '@/components/NewList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hacker News - News List</title>
      </Head>

      <main>
        <NewList/>
      </main>
    </>
  )
}
