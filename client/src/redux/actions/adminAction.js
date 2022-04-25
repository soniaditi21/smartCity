
import axios from 'axios';
import * as action from '../constants/constants';




export const fetchAdmin = () => async (dispatch) => {

          try{
          
             const {data} = await axios.get(`http://localhost:8000/admin`);
             dispatch({type: action.FETCH_ADMIN_SUCCESS, payload: data})
              
             
          } catch(error){
            dispatch({type: action.FETCH_ADMIN_FAILED, payload: error.response});
          }
}
