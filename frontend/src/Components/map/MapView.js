import React from "react";
// import {gmap_key} from '../../config.js'
import PropTypes from "prop-types";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import image from '../../Assets/classRoom.jpg'

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import DialogActions from '@material-ui/core/DialogActions'
import CardMedia from "@material-ui/core/CardMedia";

import Rating from "react-rating";

import "./index.css";

const styles = {
  container: {
    color: "red"
  },
  titleCSS: {
    textAlign: "center"
  },
  imageCSS: {
    marginLeft: "5%",
    marginRight: "5%",
    height: "100%",
    width: "100%"
  },
  HomeCSS: {
    padding: "20%"
  },
  buttonCSS: {
    marginLeft: "25%",
    marginRight: "25%"
  },
  innerButtonCSS: {
    marginLeft: "15%",
    marginRight: "5%"
  },
  containerCSS: {
    marginTop: "10%"
  },

  ratingCSS: {
    marginLeft: "25%",
    marginRight: "25%",
    width: "100%"
  }
};

const MapView = props => {
  const { classes } = props;
  // const MapItems = props.MapItems

  return (
    <div>
      <Map
        className="map"
        style={{
          margin: "15% 10%",
          height: "75%",
          width: "75%"
        }}
        google={props.google}
        onClick={props.onMapClicked}
        center={props.currentLocation}
      >
        {/* Ternary conditional here, since mapItems
          is false until asynch request returns list of mapItems list */}
        {props.mapItems
          ? props.mapItems.map(data => {
              return (
                //@todo How do we use this info passed to Marker?
                <Marker
                  onClick={props.onMarkerClicked}
                  name={data.title}
                  image={data.image}
                  rating={data.rating}
                  userItem={data.user_item}
                  position={data.location}
                  tags={data.tags}
                />
              );
            })
          : console.log("MapItems [] is empty")}

        <InfoWindow
          marker={props.activeMarker}
          visible={props.showingInfoWindow}
        >
          {console.log("InfoWindow!")}
          <div>
            <h1 className={classes.titleCSS}>{props.activeMarkerProps.name}</h1>
          </div>
          {/* <img alt="..." src={props.markerImage} width={100} height={100} /> */}

          <CardMedia
            component="img"
            className={classes.imageCSS}
            image={props.markerImage}
            title={props.activeMarkerProps.title}
          />

          {console.log(this.activeMarkerProps)}
          <div className={classes.containerCSS}>
            {props.activeMarkerProps
              ? props.activeMarkerProps.tags.map(tag => {
                  return (
                    <Button
                      variant="contained"
                      className={classes.innerButtonCSS}
                    >
                      {tag}{" "}
                    </Button>
                  );
                })
              : console.log("Empty props.activeMarkerProps")}
          </div>

          <div className={classes.containerCSS}>
            {props.activeMarkerProps ? (
              <Rating
                className={classes.ratingCSS}
                placeholderRating={props.activeMarkerProps.rating}
              />
            ) : (
              console.log("Empty props.activeMarkerProps")
            )}
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

MapView.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object
};

export default withStyles(styles)(
  GoogleApiWrapper({ apiKey: process.env.REACT_APP_GMAP_KEY })(MapView)
);

// download_url/props.selectedPlaceImg
