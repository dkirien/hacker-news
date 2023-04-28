import { FC, useState } from 'react'
import { CommentsFields } from '@/types'
import { getCommentsById } from '@/helpers/api'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'

const loadedComments: number[] = []

const CommentItem: FC<{ comment: CommentsFields }> = ({ comment }) => {
  const [childComments, setChildComments] = useState<CommentsFields[] | undefined>([])

  function loadSubComments() {
    if ( comment && comment.kids && comment.kids.length ) {
      // Проверяем были ли загружены ответы для этого коммента
      if ( !loadedComments.includes(comment.id) ) {
        getCommentsById(comment.kids)
          .then(res => {
            setChildComments(res)
            loadedComments.push(comment.id)
          })
      }
    }
  }

  return (
    <div style={{marginBottom: '10px'}}>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={comment.kids ? <ExpandMoreIcon /> : null}
          disabled={!comment.kids}
          aria-controls={`${comment.id}-content`}
          id={`${comment.id}-header`}
          onClick={loadSubComments}
        >
          <Typography dangerouslySetInnerHTML={{__html: comment.text}} />
        </AccordionSummary>

        <AccordionDetails>
          {childComments?.map((comm: CommentsFields) => (
            !comm.dead && <CommentItem comment={comm} key={comm.id}/>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CommentItem
