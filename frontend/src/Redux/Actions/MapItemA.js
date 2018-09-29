import axios from 'axios';

const MapItemA = dispatch => {
  return {
    getMapItems: data => {
      dispatch({ type: 'GET_MAPITEMS', mapItems: data });
    },
    postMapItem: data => {
      axios
        .post(process.env.REACT_APP_MAP_URL, data)
        .then(res => {})
        .catch(err => {
          console.log(err);
        });
    }
  };
};

export default MapItemA;
