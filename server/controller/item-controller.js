import Atms from '../model/atmSchema.js';
import Hospitals from '../model/hospitalSchema.js';

export const postAtm = async (request, response) => {

  try{
    const exist = await Atms.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const atm= request.body;
    const newAtm = new Atms(atm);
   await newAtm.save();

   response.status(200).json('User is successfully Registered');
  } catch (error){
    console.log('error: ', error.message);
  }


}

export const getAtm = async (request,response) => {
    try{
      const atm =  await Atms.find({});
      response.json(atm);
    } catch(error){
        console.log('Error: ',error.message);
    }
}

export const postHospital = async (request, response) => {

  try{
    const exist = await Hospitals.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const hospital= request.body;
    const newHospital = new Hospitals(hospital);
   await newHospital.save();

   response.status(200).json('User is successfully Registered');
  } catch (error){
    console.log('error: ', error.message);
  }


}

export const getHospital = async (request,response) => {
  try{
    const hospital =  await Hospitals.find({});
    response.json(hospital);
  } catch(error){
      console.log('Error: ',error.message);
  }
}