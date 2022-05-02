import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';

import {fetchAdminReducers} from './reducers/adminReducers'
import { fetchAtmReducers, fetchCollegeReducers, fetchHospitalReducers, fetchHotelReducers, fetchLibraryReducers, fetchSchoolReducers, fetchShoppingMallReducers, fetchTempleReducers, fetchTourismReducers, fetchTransportReducers } from './reducers/itemReducers';

const reducer=combineReducers({

    fetchAdmin: fetchAdminReducers,
    fetchAtms: fetchAtmReducers,
    fetchColleges: fetchCollegeReducers,
    fetchHospitals: fetchHospitalReducers,
    fetchHotels: fetchHotelReducers,
    fetchLibrarys: fetchLibraryReducers,
    fetchSchools: fetchSchoolReducers,
    fetchShoppingMalls: fetchShoppingMallReducers,
    fetchTemples: fetchTempleReducers,
    fetchTourisms: fetchTourismReducers,
    fetchTransports: fetchTransportReducers,
    
});

const middleware= [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;