
import * as actionType from '../constants/constants';

export const fetchAdminReducers = (state = { admins: [] }, action) => {
    switch (action.type){
       case actionType.FETCH_ADMIN_SUCCESS:
           return { 
               admins: action.payload 
            }
       case actionType.FETCH_ADMIN_FAILED:
        return { error: action.payload }
       
        default:
            return state
    } 
};
