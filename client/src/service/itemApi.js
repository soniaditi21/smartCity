
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
  
  export const getAdminDetail = async () => {
    try {
     
        return await axios.get(`${url}/addatm`);
     
    } catch (error) {
        console.log('Error while getting adm by response', error);
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