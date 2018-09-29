import React, { Component } from 'react';
import MapV from './MapView.js';
import { connect } from 'react-redux';
import axios from 'axios';
import MapItemA from './../../Redux/Actions/MapItemA';
// import GetImageA from './../../Redux/Actions/GetImageA'

// var dummyData = [
// 	{
// 		"location": {"lat": 25.756085, "lng": -80.376185},
// 		"title": "Temp A",
// 		"image": "http://government.fiu.edu/_assets/images/main-banner/fiu-lake.jpg",
// 		"created_by": "1",
// 		"user_item": false,
// 		"type": "post",
// 		"tags": "food",
// 		"created_date": "2018-09-15T21:28:47.324Z",
// 		"rating": 1,
// 	},
// 	{
// 		"location": {"lat": 25.759794, "lng": -80.371109},
// 		"title": "Temp B",
// 		"image": "https://images1.miaminewtimes.com/imager/u/745xauto/9814187/florida-international-university-fiu.jpg",
// 		"created_by": "2",
// 		"user_item": false,
// 		"type": "post",
// 		"tags": "illegal_dumping",
// 		"created_date": "2018-09-15T21:28:47.324Z",
// 		"rating": 1,
// 	},
// 	{
// 		"location": {"lat": 25.756854, "lng": -80.371467},
// 		"title": "Temp C",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9535TF6VnAx-R1uTr8-GxVfERmfpQAyzFQlCAjxpWCjvx7IU",
// 		"created_by": "3",
// 		"user_item": false,
// 		"type": "post",
// 		"tags": "place",
// 		"created_date": "2018-07-15T21:28:47.324Z",
// 		"rating": 1,
// 	},
// ]

class MapC extends Component {
  data = [];
  filterMapItems = [];
  // imageData = new Image()

  constructor(props) {
    super(props);
    const { lat, lng } = this.props.initialCenter;
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      activeMarkerProps: {}, // MapItem Model data as props object
      markerImage: '', // File retrieved from S3 when Marker clicked
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }

  getImage = fileName => {
    /**
     *   Purpose: Send request to S3 via backend
     *
     * 	@param: fileName: String: Unique file name
     * 	@state change: { markerImage: new File() }
     */
    let rurl = process.env.REACT_APP_DOWNLOD_URL + '/' + fileName;
    axios
      .get(rurl)
      .then(response => {
        // Base64 String -> Blob -> File
        fetch(response.data)
          .then(res => res.blob())
          .then(blob => {
            const file = new File([blob], fileName);
            this.setState({ markerImage: file });
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onMarkerClicked = (props, marker, e) => {
    /**
     *  Purpose: Set state data for current Marker to use.
     *
     * 	@param props Mapped from MapItems
     * 	@param marker
     * 	@param e Click event object
     */
    this.setState({
      activeMarkerProps: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    // console.log(JSON.stringify(this.state.selectedPlace.image))
    this.getImage(props.image);
    // this.imageData.src=this.state.markerImage;
  };

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });
    } else {
      // Browser doesn't support Geolocation
      console.log("Browser doesn't suppport Geolocation");
    }
  };

  updateUserItem = () => {
    this.data = this.props.mapItems.map(item => {
      if (item.created_by === localStorage.getItem('userId')) {
        return { ...item, user_item: true };
      }
      return item;
    });
  };

  filterMapItem = () => {
    this.filterMapItems = this.props.mapItems.filter(item => {
      return this.props.filter.type === item.type;
    });
    // console.log("filterMapItems:" + JSON.stringify(this.filterMapItems))
    this.filterMapItems = this.filterMapItems.filter(item => {
      switch (item.tags) {
        case 'infrastructure':
          return this.props.filter.infrastructure;
        case 'dumping':
          return this.props.filter.dumping;
        case 'biohazard':
          return this.props.filter.biohazard;
        case 'event':
          return this.props.filter.event;
        case 'food':
          return this.props.filter.food;
        case 'place':
          return this.props.filter.place;
        case 'cultural':
          return this.props.filter.cultural;
        default:
          return false;
      }
    });
    // console.log("filterMapItems:" + JSON.stringify(this.filterMapItems))
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_MAP_URL)
      .then(res => {
        this.props.mapItemsA.getMapItems(res.data);
      })
      .then(res => {
        this.updateUserItem();
      })
      .catch(err => {
        console.log(err);
      });

    // this.filterMapItem();
  }

  render() {
    this.getCurrentPosition();
    // this.filterMapItem();
    return (
      <div>
        <MapV
          google={this.props.google}
          onMapClicked={this.onMapClicked}
          center={this.state.currentLocation}
          onMarkerClicked={this.onMarkerClicked}
          currentLocation={this.state.currentLocation}
          activeMarker={this.state.activeMarker}
          showingInfoWindow={this.state.showingInfoWindow}
          activeMarkerProps={this.state.activeMarkerProps}
          markerImage={this.state.markerImage}
          // selectedPlaceRating={this.state.selectedPlace.rating}
          mapItems={this.filterMapItems}
          userItem={this.state.activeMarkerProps.user_item}
        />
      </div>
    );
  }
}

MapC.defaultProps = {
  zoom: 16,
  // San Francisco, by default
  initialCenter: {
    lat: 25.759794,
    lng: -80.371109
  }
};

const mapStateToProps = state => {
  return {
    // mapItems: state.itemR.dummyMapItems
    filter: state.FilterR,
    mapItems: state.MapItemR.mapItems
  };
};

const mapActionToProps = dispatch => {
  return {
    mapItemsA: MapItemA(dispatch)
    // requestImg: GetImageA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(MapC);
