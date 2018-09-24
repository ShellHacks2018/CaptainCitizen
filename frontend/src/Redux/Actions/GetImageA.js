import axios from 'axios'

const GetImageA = (dispatch) => {

	return {
		getImg: (data) => {
				let rurl = process.env.REACT_APP_DOWNLOD_URL+'/'+data
				axios.get(rurl).then( (response) => {
				dispatch({type:'GET_IMG',img: response.data});
				console.log(JSON.stringify(response))      
				}).catch((err)=>{console.log(err);})               
		}
		
	}
}

export default GetImageA;