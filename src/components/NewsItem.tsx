import { FC } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import NewsInfo from '@/components/NewsInfo'
import { NewsFields } from '@/types'
import { toDateString } from '@/helpers/dateFormat'

const NewsItem: FC<{ news: NewsFields }> = ({ news }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{
        minWidth: 275,
        backgroundColor: '#e3f2fd',
      }}
      >
        <Link href={`/news/${news.id}`}>
          <CardActionArea>
            <CardContent>
              <Typography
                component="div"
                gutterBottom
                sx={{ fontSize: 20 }}
              >
                {news.title}
              </Typography>

              <NewsInfo
                author={news.by}
                date={toDateString(news.time)}
                rating={news.score.toString()}
                comments={news.descendants.toString()}
              />
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Box>
  )
}

export default NewsItem
