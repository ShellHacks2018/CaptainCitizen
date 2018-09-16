import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import key from '../../config'

const MapView = (props) => {
  const MapItems = props.mapItems
  return (
    <div>
      <Map google={props.google} onClick={props.onMapClicked} center={props.currentLocation} >
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
            <h1>{props.selectedPlaceName}</h1>
            <img src={props.selectedPlaceImg} alt='something' />
            <div>
              <text><b>Rating: </b>{props.selectedPlaceRating}</text>
            </div>
            {props.userItem && <div>
              <Button variant='contained' color='secondary'>Edit</Button>
            </div>}
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

export default GoogleApiWrapper({ apiKey: key })(MapView)
