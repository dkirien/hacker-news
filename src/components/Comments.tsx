import { FC } from 'react'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import Link from 'next/link'
import Button from '@mui/material/Button'

const Comments: FC = () => {
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

        <Button variant="contained" >
          Update comments
        </Button>
      </Box>

      <div style={{marginBottom: '10px'}}>
        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Lorem ipsum dolor sit amet.
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="p1b-content"
                id="p1b-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Accordion TransitionProps={{ unmountOnExit: true }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p1c-content"
                    id="p1c-header"
                  >
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionSummary>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <Accordion
          TransitionProps={{ unmountOnExit: true }}
          disabled

        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  )
}

export default Comments
