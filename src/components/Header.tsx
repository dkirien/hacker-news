import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const Header: FC = () => {
  const router = useRouter()
  const [isHome, setIsHome] = useState<boolean>(false)

  useEffect(() => {
    setIsHome(() => router.pathname === '/')
  }, [router])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={'/'}>Hacker News</Link>
          </Typography>

          {isHome ? (
            <Button color="inherit">Update news</Button>
          ) : (
            <Button color="inherit">
              <Link href={'/'}>Back to list</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
