import { FC } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import NewsInfo from '@/components/NewsInfo'

const NewsItem: FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{
        minWidth: 275,
        backgroundColor: '#e3f2fd',
      }}
      >
        <Link href={'/news/25'}>
          <CardActionArea>
            <CardContent>
              <Typography
                component="div"
                gutterBottom
                sx={{ fontSize: 20 }}
              >
                Title
              </Typography>

              <NewsInfo
                author={'Admin'}
                date={'2023-04-27'}
                rating={'588'}
                comments={'300'}
              />
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Box>
  )
}

export default NewsItem
