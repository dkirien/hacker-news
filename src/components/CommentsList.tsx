import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CommentsFields } from '@/types'
import { getCommentsById, getNewsById } from '@/helpers/api'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import CommentItem from '@/components/CommentItem'

const CommentsList: FC<{ ids: number[] }> = ({ ids }) => {
  if ( !ids || !ids.length ) return null

  const { query: { id } } = useRouter()
  const [comments, setComments] = useState<CommentsFields[] | undefined>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if ( ids.length ) {
      setIsLoading(true)
      getCommentsById(ids)
        .then(res => setComments(res))
        .finally(() => setIsLoading(false))
    }
  }, [ids])

  async function updateComments() {
    setIsLoading(true)
    const newsUpdate = await getNewsById(id as string)

    if ( newsUpdate && newsUpdate.kids ) {
      getCommentsById(newsUpdate.kids)
        .then(res => setComments(res))
        .finally(() => setIsLoading(false))
    }
  }

  return (
    <div className={'comments'}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px'
        }}
      >
        <Typography
          color="text.primary"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            marginBottom: 0
          }}>
          Comments:
        </Typography>

        <Button variant="contained" onClick={updateComments}>
          Update comments
        </Button>
      </Box>

      {comments?.map((comm: CommentsFields) => (
        !comm.dead && <CommentItem comment={comm} key={comm.id} />
      ))}

      <Backdrop
        open={isLoading}
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: 'absolute'
      }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default CommentsList
