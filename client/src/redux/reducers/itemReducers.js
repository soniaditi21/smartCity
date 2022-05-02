
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

export const fetchCollegeReducers = (state = { colleges: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_COLLEGE_SUCCESS:
           return { 
               colleges: action.payload 
            }
       case actionType.FETCH_COLLEGE_FAILED:
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

export const fetchHotelReducers = (state = { hotels: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_HOTEL_SUCCESS:
           return { 
               hotels: action.payload 
            }
       case actionType.FETCH_HOTEL_FAILED:
        return { error: action.payload }
       
        default:
            return state
    } 
};

export const fetchLibraryReducers = (state = { librarys: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_LIBRARY_SUCCESS:
           return { 
               librarys: action.payload 
            }
       case actionType.FETCH_LIBRARY_FAILED:
        return { error: action.payload }
       
        default:
            return state
    } 
};

export const fetchSchoolReducers = (state = { schools: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_SCHOOL_SUCCESS:
           return { 
               schools: action.payload 
            }
       case actionType.FETCH_SCHOOL_FAILED:
        return { error: action.payload }
       
        default:
            return state
    } 
};

export const fetchShoppingMallReducers = (state = { shoppingmalls: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_SHOPPINGMALL_SUCCESS:
           return { 
               shoppingmalls: action.payload 
            }
       case actionType.FETCH_SHOPPINGMALL_FAILED:
        return { error: action.payload }
       
        default:
            return state
    } 
};

export const fetchTempleReducers = (state = { temples: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_TEMPLE_SUCCESS:
           return { 
               temples: action.payload 
            }
       case actionType.FETCH_TEMPLE_FAILED:
        return { error: action.payload }
       
        default:
            return state
    } 
};

export const fetchTourismReducers = (state = { tourisms: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_TOURISM_SUCCESS:
           return { 
               tourisms: action.payload 
            }
       case actionType.FETCH_TOURISM_FAILED:
        return { error: action.payload }
       
        default:
            return state
    } 
};

export const fetchTransportReducers = (state = { transports: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_TRANSPORT_SUCCESS:
           return { 
               transports: action.payload 
            }
       case actionType.FETCH_TRANSPORT_FAILED:
        return { error: action.payload }
       
        default:
            return state
    } 
};
