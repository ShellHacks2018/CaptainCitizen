import React, {Component} from 'react'
import MapV from './MapView.js'
import {connect} from 'react-redux'


var dummyData = [
	{
		"location": {"lat": 25.756085, "lng": -80.376185},
		"title": "Temp A",
		"image": "https://news.fiu.edu/wp-content/uploads/33361133815_4930957805_z-1-1.jpg",
		"created_by": "1",
		"user_item": false,
		"type": "issue",
		"tags": ["bioharzard","infrastructure"],
		"created_date": "2018-09-15T21:28:47.324Z",
		"rating": 1,
	},
	{
		"location": {"lat": 25.759794, "lng": -80.371109},
		"title": "Temp B",
		"image": "https://news.fiu.edu/wp-content/uploads/33361133815_4930957805_z-1-1.jpg",
		"created_by": "2",
		"user_item": false,
		"type": "issue",
		"tags": ["illegal_dumping"],
		"created_date": "2018-09-15T21:28:47.324Z",
		"rating": 1,
	},
	{
		"location": {"lat": 25.756854, "lng": -80.371467},
		"title": "Temp C",
		"image": "https://news.fiu.edu/wp-content/uploads/33361133815_4930957805_z-1-1.jpg",
		"created_by": "3",
		"user_item": false,
		"type": "post",
		"tags": ["food","place"],
		"created_date": "2018-07-15T21:28:47.324Z",
		"rating": 1,
	},
]


class MapC extends Component{
	data = []
	constructor(props){
    super(props);
		const {lat, lng} = this.props.initialCenter;

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentLocation: {
        lat: lat,
        lng: lng
			}
		}
	}


	onMarkerClicked = (props, marker, e) =>
	this.setState({
		selectedPlace: props,
		activeMarker: marker,
		showingInfoWindow: true
	});

	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	};

	getCurrentPosition = () => {
		if(navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition((position)=> {
				this.setState({
					currentLocation: {
							lat: position.coords.latitude,
							lng: position.coords.longitude
					}
				});
			})
		}
		else{
			// Browser doesn't support Geolocation
			console.log("Browser doesn't suppport Geolocation");
		}
	}

	updateUserItem = () => {
		this.data = dummyData.map((item) => {
			if(item.created_by === localStorage.getItem('userId')){
				return {...item, user_item: true }
			}
			return item
		})

	}

	componentDidMount(){
		this.updateUserItem();
		// console.log(this.props.filter)
	}

  render(){
		this.getCurrentPosition();
		return(
			<div>
				<MapV google={this.props.google}
							onMapClicked={this.onMapClicked}
							center={this.state.currentLocation}
							onMarkerClicked={this.onMarkerClicked}
							currentLocation={this.state.currentLocation}
							activeMarker={this.state.activeMarker}
							showingInfoWindow={this.state.showingInfoWindow}
							selectedPlaceName={this.state.selectedPlace.name}
							selectedPlaceImg={this.state.selectedPlace.image_url}
							selectedPlaceRating={this.state.selectedPlace.rating}
							mapItems={this.data}
							userItem={this.state.selectedPlace.userItem} />
			</div>
		)
	}
}

MapC.defaultProps = {
  zoom: 16,
  // San Francisco, by default
  initialCenter: {
    lat: 25.760100,
    lng: -80.374445
  },
}

const mapStateToProps = state => {
	return{
		// mapItems: state.itemR.dummyMapItems
		filter: state.FilterR
		
	}
}

const mapActionToProps = dispatch =>{
	return{
		// setUserItem: itemA(dispatch)
	}
}

export default connect(mapStateToProps, mapActionToProps)(MapC)
