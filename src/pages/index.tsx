import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getNews } from '@/helpers/api'
import { NewsFields } from '@/types'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import NewsList from '@/components/NewsList'

export default function Home({ news }: { news: NewsFields[] }) {
  const [loadedNews, setLoadedNews] = useState<NewsFields[]>(() => news)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  let interval: any

  async function updateNews() {
    setIsLoading(true)
    clearInterval(interval)
    const news = await getNews()

    if ( news && news.length )
      setLoadedNews(news)

    setIsLoading(false)
  }

  useEffect(() => {
    interval = setInterval(() => {
      updateNews()
    }, 60000)

    return () => clearInterval(interval)
  })

  return (
    <>
      <Head>
        <title>Hacker News - News List</title>
      </Head>

      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Button
          variant={'contained'}
          onClick={() => updateNews()}
        >
          Update news
        </Button>
      </Box>

      <main>
        <NewsList items={loadedNews}/>
      </main>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export const getStaticProps: GetStaticProps<{ news: NewsFields[] | undefined }> = async () => {
  const news = await getNews()

  return {
    props: { news },
    revalidate: 60
  }
}
