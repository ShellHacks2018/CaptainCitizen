import React from 'react'
import {gmap_key} from '../../config.js'
import PropTypes from 'prop-types'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
// import DialogActions from '@material-ui/core/DialogActions'
import CardMedia from '@material-ui/core/CardMedia'

import Rating from 'react-rating'
import ClassRoom from '../../Assets/classRoom.jpg'

const styles = {
  container: {
    color: 'red'
  },
  titleCSS: {
    textAlign: 'center'
  },
  imageCSS: {
    marginLeft: '25%',
    marginRight: '25%',
    hieght: '50%',
    width: '50%'
  },
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

  ratingCSS: {
    marginLeft: '25%',
    marginRight: '25%',
    width: '100%'
  }
}

const MapView = (props) => {
  const {classes} = props
  const MapItems = props.mapItems
  return (
    <div>
      <Map style={{margin: '15% 10%', height: '75%', width: '75%'}} google={props.google} onClick={props.onMapClicked} center={props.currentLocation} >
        { MapItems.map(data => {
          return (
            <Marker
              onClick={props.onMarkerClicked}
              name={data.title}
              image_url={data.image}
              rating={data.rating}
              userItem={data.user_item}
              position={data.location} />
          )
        })}
        <InfoWindow marker={props.activeMarker} visible={props.showingInfoWindow}>
          <div>
            <h1 className={classes.titleCSS}>{props.selectedPlaceName}</h1>
          </div>

          <CardMedia component='img' className={classes.imageCSS} image={props.selectedPlaceImg} title='Class PG6' />
          <div className={classes.containerCSS}>
            <Button variant='contained' className={classes.innerButtonCSS} > Cultural </Button>
            <Button variant='contained' className={classes.innerButtonCSS} > Food </Button>
          </div>
          <div className={classes.containerCSS}>
            <Rating className={classes.ratingCSS} />
          </div>
        </InfoWindow>
      </Map>
    </div>
  )
}

MapView.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object
}

export default withStyles(styles)(GoogleApiWrapper({ apiKey: gmap_key })(MapView))

// download_url/props.selectedPlaceImg