import { FC } from 'react'
import Link from 'next/link'
import { INewsInfoPageProps } from '@/types'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Head from 'next/head'

const News: FC<INewsInfoPageProps> = ({ title, author, date, comments }) => {
  return (
    <>
      <Head>
        <title>Hacker News - {title}</title>
      </Head>

      <Box sx={{ p: 2 }}>
        <Card sx={{
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
              <Link href={'/news/25'}>Title</Link>
            </Typography>

            <Typography color="text.primary" gutterBottom>
              <span>Posted by:</span>
              <span>{author}</span>
            </Typography>

            <Typography color="text.primary" gutterBottom>
              <span>Posted date:</span>
              <span>{date}</span>
            </Typography>

            <Typography color="text.primary" gutterBottom>
              <span>Comments:</span>
              <span>{comments}</span>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default News
