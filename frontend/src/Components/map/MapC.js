import React, {Component} from 'react'
import MapV from './MapView.js'
import {connect} from 'react-redux'
import GetImageA from './../../Redux/Actions/GetImageA'


var dummyData = [
	{
		"location": {"lat": 25.756085, "lng": -80.376185},
		"title": "Temp A",
		"image": "https://drive.google.com/open?id=1jU4THx6ILA7UdAGkrgQeS0_EtRjQncmU",
		"created_by": "1",
		"user_item": false,
		"type": "issue",
		"tags": "food",
		"created_date": "2018-09-15T21:28:47.324Z",
		"rating": 1,
	},
	{
		"location": {"lat": 25.759794, "lng": -80.371109},
		"title": "Temp B",
		"image": "https://drive.google.com/open?id=1ufkmaLG0EvRa2icT7-bTWvpe33sSvHIL",
		"created_by": "2",
		"user_item": false,
		"type": "issue",
		"tags": "illegal_dumping",
		"created_date": "2018-09-15T21:28:47.324Z",
		"rating": 1,
	},
	{
		"location": {"lat": 25.756854, "lng": -80.371467},
		"title": "Temp C",
		"image": "https://drive.google.com/open?id=18EG_0tApdT95Kc-QvtBZHSfkEBeNpoKt",
		"created_by": "3",
		"user_item": false,
		"type": "post",
		"tags": "place",
		"created_date": "2018-07-15T21:28:47.324Z",
		"rating": 1,
	},
]


class MapC extends Component{
	data = []
	filterMapItems = []
	imageData = new Image()
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


	onMarkerClicked = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
		// console.log(JSON.stringify(this.state.selectedPlace.image))
		this.props.requestImg.getImg(this.state.selectedPlace.image);
		this.imageData.src=this.props.imgState.img
		// console.log("response: "+JSON.stringify(this.props.imgState))
	}
	

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

	filterMapItem = () => {
		this.filterMapItems = dummyData.filter((item) => {
			return this.props.filter.type === item.type
		})
		// console.log("filterMapItems:" + JSON.stringify(this.filterMapItems))
		this.filterMapItems = this.filterMapItems.filter((item) => {
			switch(item.tags){
				case 'infrastructure':
					return this.props.filter.infrastructure
				case 'dumping':
					return this.props.filter.dumping
				case 'biohazard':
					return this.props.filter.biohazard
				case 'event':
					return this.props.filter.event
				case 'food':
					return this.props.filter.food
				case 'place':
					return this.props.filter.place
				case 'cultural':
					return this.props.filter.cultural
				default:
					return false
				
			}
		})
		// console.log("filterMapItems:" + JSON.stringify(this.filterMapItems))
	}

	

	componentDidMount(prevProp){
		this.updateUserItem();
		// this.filterMapItem();
		
	}

  render(){
		this.getCurrentPosition();
		this.filterMapItem();
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
							selectedPlaceImg={this.imageData}
							selectedPlaceRating={this.state.selectedPlace.rating}
							mapItems={this.filterMapItems}
							userItem={this.state.selectedPlace.userItem} />
			</div>
		)
	}
}

MapC.defaultProps = {
  zoom: 16,
  // San Francisco, by default
  initialCenter: {
    lat: 25.759794,
    lng: -80.371109
  },
}

const mapStateToProps = state => {
	return{
		// mapItems: state.itemR.dummyMapItems
		filter: state.FilterR,
		imgState: state.ImageR
		
	}
}

const mapActionToProps = dispatch => {
	return{
		requestImg: GetImageA(dispatch)
	}
}

export default connect(mapStateToProps,mapActionToProps)(MapC)
