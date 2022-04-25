
import * as actionType from '../constants/constants';

export const fetchAtmReducers = (state = { atms: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_ATM_SUCCESS:
           return { 
               atms: action.payload 
            }
       case actionType.FETCH_ATM_FAILED:
        return { error: action.payload }
       
        default:
            return state
    } 
};

export const fetchHospitalReducers = (state = { hospitals: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_HOSPITAL_SUCCESS:
           return { 
               hospitals: action.payload 
            }
       case actionType.FETCH_HOSPITAL_FAILED:
        return { error: action.payload }
       
        default:
            return state
    } 
};
