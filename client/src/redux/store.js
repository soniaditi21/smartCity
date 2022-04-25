import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';

import {fetchAdminReducers} from './reducers/adminReducers'
import { fetchAtmReducers, fetchHospitalReducers } from './reducers/itemReducers';

const reducer=combineReducers({

    fetchAdmin: fetchAdminReducers,
    fetchAtms: fetchAtmReducers,
    fetchHospitals: fetchHospitalReducers,
    
});

const middleware= [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;