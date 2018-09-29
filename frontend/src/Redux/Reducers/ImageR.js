const initState = {
  img: null
};

function ImageR(state = initState, action) {
  switch (action.type) {
    case "GET_IMG":
      return { ...state, img: action.img };
    default:
      return state;
  }
}

export default ImageR;
