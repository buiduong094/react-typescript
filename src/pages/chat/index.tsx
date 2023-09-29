// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import ChatTop from 'src/views/chat/ChatTop'
import ChatBody from 'src/views/chat/ChatBody'
const Email = () => {
  return (
    <Grid container spacing={6}>
      <Grid item md={5} xs={12}>
        <ChatTop />
      </Grid>
      <Grid item xs={12} md={7}>
        <ChatBody />
      </Grid>
    </Grid>
  )
}

export default Email
