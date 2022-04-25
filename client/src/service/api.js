

import axios from 'axios';



const url = 'http://localhost:8000';


export const authenticateSignup = async (user) => {
  try{
    return await axios.post(`${url}/signup`, user);
  } catch(error){
    console.log('Error while calling signup API',error);
  }
  }


export const authenticateLogin = async (user) => {

  try{
    return await axios.post(`${url}/login`,user);
  } catch(error){
    console.log('Error while calling login api',error);
  }
}


export const authenticateAdmin = async (admin) => {

  try{
    return await axios.post(`${url}/admin`,admin);
  } catch(error){
    console.log('Error while calling admin api',error);
  }
}

export const getAdminDetail = async () => {
  try {
    console.log(url);
      return await axios.get(`${url}/admin`);
   
  } catch (error) {
      console.log('Error while getting admin by id response', error);
  }
}