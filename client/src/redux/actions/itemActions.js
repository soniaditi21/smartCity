
import axios from 'axios';
import * as action from '../constants/constants';




export const fetchAtms = () => async (dispatch) => {

          try{
          
             const {data} = await axios.get(`http://localhost:8000/addatm`);
             console.log(data);
             dispatch({type: action.FETCH_ATM_SUCCESS, payload: data})
              
             
          } catch(error){
            dispatch({type: action.FETCH_ATM_FAILED, payload: error.response});
          }
}


export const fetchHospitals = () => async (dispatch) => {

  try{
  
     const {data} = await axios.get(`http://localhost:8000/addhospital`);
     console.log(data);
     dispatch({type: action.FETCH_HOSPITAL_SUCCESS, payload: data})
      
     
  } catch(error){
    dispatch({type: action.FETCH_HOSPITAL_FAILED, payload: error.response});
  }
}
