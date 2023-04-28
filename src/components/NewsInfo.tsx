import { FC } from 'react'
import { INewsInfoProps } from '@/types'
import Typography from '@mui/material/Typography'
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown'
import PersonIcon from '@mui/icons-material/Person'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CommentIcon from '@mui/icons-material/Comment'
import Box from '@mui/material/Box'
import { useMediaQuery } from '@mui/material'

const NewsInfo: FC<INewsInfoProps> = ({ author, date, rating, comments }) => {
  const mobileView = useMediaQuery('(max-width:600px)')

  return (
    <Box sx={{ display: 'flex', flexDirection: mobileView ? 'column' : 'row' }}>
      <Typography
        color="text.primary"
        gutterBottom
        sx={{
          display: 'flex',
          marginRight: '10px'
        }}
      >
        <PersonIcon
          fontSize="small"
          sx={{
            opacity: '0.9',
            marginRight: '6px'
          }}
        />

        <span style={{ lineHeight: '20px' }}>{author}</span>
      </Typography>

      <Typography
        color="text.primary"
        gutterBottom
        sx={{
          display: 'flex',
          marginRight: '10px'
        }}
      >
        <CalendarMonthIcon
          fontSize="small"
          sx={{
            opacity: '0.9',
            marginRight: '6px'
          }}
        />

        <span style={{ lineHeight: '20px' }}>{date}</span>
      </Typography>

      <Typography
        color="text.primary"
        gutterBottom
        sx={{
          display: 'flex',
          marginRight: '10px'
        }}
      >
        <ThumbsUpDownIcon
          fontSize="small"
          sx={{
            opacity: '0.9',
            marginRight: '6px'
          }}
        />

        <span style={{ lineHeight: '20px' }}>{rating}</span>
      </Typography>

      <Typography
        color="text.primary"
        gutterBottom
        sx={{
          display: 'flex'
        }}
      >
        <CommentIcon
          fontSize="small"
          sx={{
            opacity: '0.9',
            marginRight: '6px'
          }}
        />

        <span style={{ lineHeight: '20px' }}>{comments}</span>
      </Typography>
    </Box>
  )
}

export default NewsInfo
