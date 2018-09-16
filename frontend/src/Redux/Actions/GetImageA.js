import axios from 'axios'
import {download_url} from '../../config.js'

const GetImageA = (dispatch) => {

	return {
		getImg: (data) => {
				let rurl = download_url+'/'+data
				axios.get(rurl).then( (response) => {
				dispatch({type:'GET_IMG',img: response.data});
				console.log(JSON.stringify(response))      
				}).catch((err)=>{console.log(err);})               
		}
		
	}
}

export default GetImageA;