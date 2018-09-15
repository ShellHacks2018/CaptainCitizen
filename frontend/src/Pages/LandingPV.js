import React from 'react'
import CaptinAmerica from '../Assets/captinAmerica.jpg'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import TextField from '@material-ui/core/TextField'

const styles = {
  card: {
    margin: '25% 25%',
    maxWidth: 345
  },
  media: {
    objectFit: 'cover',
    height: '100%',
    width: '100%'
  },
  textField: {
    marginLeft: '25%'
  }
}

const LandingPV = (props) => {
  const {classes} = props
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component='img' className={classes.media} image={CaptinAmerica} title='Captin America' />
          <CardContent>
            <form className={classes.container} noValidate autoComplete='off'>
              <TextField className={classes.textField} id='username' label='Username' margin='normal' />
              <TextField className={classes.textField} id='password' label='Password' margin='normal' type='password' />
            </form>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default withStyles(styles)(LandingPV)
