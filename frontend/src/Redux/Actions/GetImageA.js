import axios from 'axios';

const GetImageA = dispatch => {
  return {
    getImg: data => {
      // let rurl = process.env.REACT_APP_DOWNLOD_URL+'/'+data
      // axios.get(rurl).then( (response) => {
      // // Base64 String -> Blob -> File
      // fetch(response.data)
      // .then(res => res.blob())
      // .then(blob => {
      // 	const file = new File([blob], name)
      // 	dispatch({type:'GET_IMG', img: file});
      // })
      // }).catch((err)=>{console.log(err);})
    }
  };
};

export default GetImageA;
