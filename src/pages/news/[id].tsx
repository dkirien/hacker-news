import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { NewsFields, PathsParams } from '@/types'
import { getNews, getNewsById } from '@/helpers/api'
import { toDateString } from '@/helpers/dateFormat'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Comments from '@/components/Comments'

const News: FC<{ news: NewsFields }> = ({ news }) => {
  return (
    <>
      <Head>
        <title>Hacker News - {news.title}</title>
      </Head>

      <Box sx={{ p: 2 }}>
        <Card
          sx={{
            minWidth: 275,
            backgroundColor: '#e3f2fd',
          }}
        >
          <CardContent>
            <Typography
              component="div"
              gutterBottom
              sx={{ fontSize: 20 }}
            >
              {news.url ? (
                <Link href={news.url} target={'_blank'}>{news.title}</Link>
              ) : (news.title)}
            </Typography>

            <Typography color="text.primary" gutterBottom>
              <span>Posted by: </span>
              <span>{news.by}</span>
            </Typography>

            <Typography color="text.primary" gutterBottom>
              <span>Posted date: </span>
              <span>{toDateString(news.time)}</span>
            </Typography>

            <Typography color="text.primary" gutterBottom>
              <span>Comments: </span>
              <span>{news.descendants}</span>
            </Typography>
          </CardContent>

          <Divider />

          <CardContent>
            <Comments />
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default News

export const getStaticProps: GetStaticProps<{ news: NewsFields | undefined }> = async (context) => {
  const news = await getNewsById(context.params?.id as string)

  return {
    props: { news }
  }
}

export const getStaticPaths: () => Promise<PathsParams> = async () => {
  const news = await getNews()
  const paths = news?.map((n: NewsFields) => ({ params: { id: n.id.toString() } }))

  return {
    paths,
    fallback: true
  }
}

