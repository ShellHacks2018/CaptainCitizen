import React from 'react'
import MapC from './../Components/map/MapC'
import AddItemC from './../Components/addItem/AddItemC'

import MapC from './../Components/map/MapC'

const HomePV = (props) => {
  return (
    <div>
      <h1 style={style}>Home!</h1>
      <AddItemC />
      <MapC />
    </div>
  )
}

export default HomePV

/*
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
// import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import CardMedia from '@material-ui/core/CardMedia'

// For rating Stars

import Rating from 'react-rating'
import ClassRoom from '../Assets/classRoom.jpg'
const style = {
  HomeCSS: {
    padding: '20%'
  },
  buttonCSS: {
    marginLeft: '25%',
    marginRight: '25%'
  },
  innerButtonCSS: {
    marginLeft: '15%',
    marginRight: '5%'
  },
  containerCSS: {
    marginTop: '10%'
  },
  titleCSS: {
    textAlign: 'center'
  },
  ratingCSS: {
    marginLeft: '25%',
    marginRight: '25%',
    width: '100%'
  }
}

<h1 className={classes.HomeCSS}>Home!</h1>
<Button variant='contained' className={classes.buttonCSS} onClick={props.handleOpenAction}> Open Modal </Button>
<Dialog paperWidthLg className={classes.modalCSS} open={props.open} onClose={props.handleCloseAction} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description' >
  <DialogTitle id='alert-dialog-title' className={classes.titleCSS}>Title should go here</DialogTitle>
  <DialogContent>
    <CardMedia component='img' className={classes.media} image={ClassRoom} title='Class PG6' />
    <div className={classes.containerCSS}>
      <Button variant='contained' className={classes.innerButtonCSS} > Cultural </Button>
      <Button variant='contained' className={classes.innerButtonCSS} > Food </Button>
    </div>
    <div className={classes.containerCSS}>
      <Rating className={classes.ratingCSS} />
    </div>
  </DialogContent>
</Dialog>
*/
