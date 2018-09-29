const initState = {
  mapItems: false
};

function MapItemsR(state = initState, action) {
  switch (action.type) {
    case "GET_MAPITEMS":
      return { ...state, mapItems: action.mapItems };
    default:
      return state;
  }
}

export default MapItemsR;
