import { FC } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown'
import PersonIcon from '@mui/icons-material/Person'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CommentIcon from '@mui/icons-material/Comment'
import NewsInfo from '@/components/NewsInfo'

const NewsItem: FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{
        minWidth: 275,
        backgroundColor: '#e3f2fd',
      }}
      >
        <CardContent sx={{ paddingBottom: '0px' }}>
          <Typography
            component="div"
            gutterBottom
            sx={{
              fontSize: 20,
            }}
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

        <CardActions>
          <Button
            size="small"
            sx={{ color: 'text.primary' }}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default NewsItem
