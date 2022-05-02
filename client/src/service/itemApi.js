
import axios from "axios";

const url = 'http://localhost:8000';

export const addAtmDetail = async (item) => {
    console.log(item);
    try{
      return await axios.post(`${url}/addatm`,item);
    } catch(error){
      console.log('Error while calling atm api',error);
    }
  }
  
  export const getAtmDetail = async () => {
    try {
     
        return await axios.get(`${url}/addatm`);
     
    } catch (error) {
        console.log('Error while getting atm by response', error);
    }
  }


  
  export const addHospitalDetail = async (item) => {
    console.log(item);
    try{
      return await axios.post(`${url}/addhospital`,item);
    } catch(error){
      console.log('Error while calling hospital api',error);
    }
  }

  export const getHospitalDetail = async () => {
    try {
     
        return await axios.get(`${url}/addhospital`);
     
    } catch (error) {
        console.log('Error while getting hospital by response', error);
    }
  }

  
export const addCollegeDetail = async (item) => {
  console.log(item);
  try{
    return await axios.post(`${url}/addcollege`,item);
  } catch(error){
    console.log('Error while calling college api',error);
  }
}

export const getCollegeDetail = async () => {
  try {
   
      return await axios.get(`${url}/addcollege`);
   
  } catch (error) {
      console.log('Error while getting college by response', error);
  }
}


export const addHotelDetail = async (item) => {
  console.log(item);
  try{
    return await axios.post(`${url}/addhotel`,item);
  } catch(error){
    console.log('Error while calling hotel api',error);
  }
}

export const getHotelDetail = async () => {
  try {
   
      return await axios.get(`${url}/addhotel`);
   
  } catch (error) {
      console.log('Error while getting hotel by response', error);
  }
}


export const addSchoolDetail = async (item) => {
  console.log(item);
  try{
    return await axios.post(`${url}/addschool`,item);
  } catch(error){
    console.log('Error while calling school api',error);
  }
}

export const getSchoolDetail = async () => {
  try {
   
      return await axios.get(`${url}/addschool`);
   
  } catch (error) {
      console.log('Error while getting school by response', error);
  }
}


export const addShoppingMallDetail = async (item) => {
  console.log(item);
  try{
    return await axios.post(`${url}/addshoppingMall`,item);
  } catch(error){
    console.log('Error while calling shoppingMall api',error);
  }
}

export const getShoppingMallDetail = async () => {
  try {
   
      return await axios.get(`${url}/addshoppingMall`);
   
  } catch (error) {
      console.log('Error while getting shoppingMall by response', error);
  }
}


export const addTempleDetail = async (item) => {
  console.log(item);
  try{
    return await axios.post(`${url}/addtemple`,item);
  } catch(error){
    console.log('Error while calling temple api',error);
  }
}

export const getTempleDetail = async () => {
  try {
   
      return await axios.get(`${url}/addtemple`);
   
  } catch (error) {
      console.log('Error while getting temple by response', error);
  }
}


export const addTourismDetail = async (item) => {
  console.log(item);
  try{
    return await axios.post(`${url}/addtourism`,item);
  } catch(error){
    console.log('Error while calling tourism api',error);
  }
}

export const getTourismDetail = async () => {
  try {
   
      return await axios.get(`${url}/addtourism`);
   
  } catch (error) {
      console.log('Error while getting tourism by response', error);
  }
}


export const addTransportDetail = async (item) => {
  console.log(item);
  try{
    return await axios.post(`${url}/addtransport`,item);
  } catch(error){
    console.log('Error while calling transport api',error);
  }
}

export const getTransportDetail = async () => {
  try {
   
      return await axios.get(`${url}/addtransport`);
   
  } catch (error) {
      console.log('Error while getting transport by response', error);
  }
}


export const addLibraryDetail = async (item) => {
  console.log(item);
  try{
    return await axios.post(`${url}/addlibrary`,item);
  } catch(error){
    console.log('Error while calling library api',error);
  }
}

export const getLibraryDetail = async () => {
  try {
   
      return await axios.get(`${url}/addlibrary`);
   
  } catch (error) {
      console.log('Error while getting library by response', error);
  }
}