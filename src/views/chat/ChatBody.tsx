// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid, { GridProps } from '@mui/material/Grid'

// ** Icons Imports
import Twitter from 'mdi-material-ui/Twitter'
import CartPlus from 'mdi-material-ui/CartPlus'
import Facebook from 'mdi-material-ui/Facebook'
import Linkedin from 'mdi-material-ui/Linkedin'
import GooglePlus from 'mdi-material-ui/GooglePlus'
import ShareVariant from 'mdi-material-ui/ShareVariant'

import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  // marginLeft: 10,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))
const ChatBody = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <Grid container spacing={6}>
        
        <StyledGrid item md={12} xs={12}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                    overlap='circular'
                    sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                    // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                    badgeContent={<BadgeContentSpan />}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                  <Avatar
                    alt='John Doe'
                    sx={{ width: 38, height: 38 }}
                    src='/images/avatars/1.png'
                  />
                </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
        </StyledGrid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            paddingTop: ['0 !important', '0 !important', '1.5rem !important'],
            //paddingLeft: ['1.5rem !important', '1.5rem !important', '0 !important']
          }}
        >


          
<CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>

          
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer', marginRight: 3 }}
                // <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt='John Doe'
                sx={{ width: 30, height: 30 }}
                src='/images/avatars/1.png'
              />
            </Badge>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Felecia Rower
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  I will purchase it for sure. 👍
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                  Sep 28
              </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ChatBody
