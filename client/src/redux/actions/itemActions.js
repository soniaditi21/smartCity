
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

export const fetchColleges = () => async (dispatch) => {

  try{
  
     const {data} = await axios.get(`http://localhost:8000/addcollege`);
     console.log(data);
     dispatch({type: action.FETCH_COLLEGE_SUCCESS, payload: data})
      
     
  } catch(error){
    dispatch({type: action.FETCH_COLLEGE_FAILED, payload: error.response});
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

export const fetchHotels = () => async (dispatch) => {

  try{
  
     const {data} = await axios.get(`http://localhost:8000/addhotel`);
     console.log(data);
     dispatch({type: action.FETCH_HOTEL_SUCCESS, payload: data})
      
     
  } catch(error){
    dispatch({type: action.FETCH_HOTEL_FAILED, payload: error.response});
  }
}

export const fetchLibrarys = () => async (dispatch) => {

  try{
  
     const {data} = await axios.get(`http://localhost:8000/addlibrary`);
     console.log(data);
     dispatch({type: action.FETCH_LIBRARY_SUCCESS, payload: data})
      
     
  } catch(error){
    dispatch({type: action.FETCH_LIBRARY_FAILED, payload: error.response});
  }
}
export const fetchSchools = () => async (dispatch) => {

  try{
  
     const {data} = await axios.get(`http://localhost:8000/addschool`);
     console.log(data);
     dispatch({type: action.FETCH_SCHOOL_SUCCESS, payload: data})
      
     
  } catch(error){
    dispatch({type: action.FETCH_SCHOOL_FAILED, payload: error.response});
  }
}
export const fetchShoppingMalls = () => async (dispatch) => {

  try{
  
     const {data} = await axios.get(`http://localhost:8000/addshoppingMall`);
     console.log(data);
     dispatch({type: action.FETCH_SHOPPINGMALL_SUCCESS, payload: data})
      
     
  } catch(error){
    dispatch({type: action.FETCH_SHOPPINGMALL_FAILED, payload: error.response});
  }
}
export const fetchTemples = () => async (dispatch) => {

  try{
  
     const {data} = await axios.get(`http://localhost:8000/addtemple`);
     console.log(data);
     dispatch({type: action.FETCH_TEMPLE_SUCCESS, payload: data})
      
     
  } catch(error){
    dispatch({type: action.FETCH_TEMPLE_FAILED, payload: error.response});
  }
}
export const fetchTourisms = () => async (dispatch) => {

  try{
  
     const {data} = await axios.get(`http://localhost:8000/addtourism`);
     console.log(data);
     dispatch({type: action.FETCH_TOURISM_SUCCESS, payload: data})
      
     
  } catch(error){
    dispatch({type: action.FETCH_TOURISM_FAILED, payload: error.response});
  }
}
export const fetchTransports = () => async (dispatch) => {

  try{
  
     const {data} = await axios.get(`http://localhost:8000/addtransport`);
     console.log(data);
     dispatch({type: action.FETCH_TRANSPORT_SUCCESS, payload: data})
      
     
  } catch(error){
    dispatch({type: action.FETCH_TRANSPORT_FAILED, payload: error.response});
  }
}