import Atms from '../model/atmSchema.js';
import Hospitals from '../model/hospitalSchema.js';
import Colleges from '../model/collegeSchema.js';
import Librarys from '../model/librarySchema.js';
import Schools from '../model/schoolSchema.js';
import ShoppingMalls from '../model/shoppingMallsSchema.js';
import Temples from '../model/templeSchema.js';
import Tourisms from '../model/tourismSchema.js';
import Transports from '../model/transportSchema.js';
import Hotels from '../model/hotelSchema.js';

export const postAtm = async (request, response) => {

  try{
    const exist = await Atms.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const atm= request.body;
    const newAtm = new Atms(atm);
   await newAtm.save();

   response.status(200).json('Item successfully added');
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

   response.status(200).json('Item Successfully Added');
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

export const postCollege = async (request, response) => {

  try{
    const exist = await Colleges.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const college= request.body;
    const newCollege = new Colleges(college);
   await newCollege.save();

   response.status(200).json('Item is successfully Added');
  } catch (error){
    console.log('error: ', error.message);
  }


}

export const getCollege = async (request,response) => {
    try{
      const college =  await Colleges.find({});
      response.json(college);
    } catch(error){
        console.log('Error: ',error.message);
    }
}

export const postHotel = async (request, response) => {

  try{
    const exist = await Hotels.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const hotel= request.body;
    const newHotel = new Hotels(hotel);
   await newHotel.save();

   response.status(200).json('Item successfully added');
  } catch (error){
    console.log('error: ', error.message);
  }


}

export const getHotel = async (request,response) => {
    try{
      const hotel =  await Hotels.find({});
      response.json(hotel);
    } catch(error){
        console.log('Error: ',error.message);
    }
}

export const postLibrary = async (request, response) => {

  try{
    const exist = await Librarys.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const library= request.body;
    const newLibray = new Librarys(library);
   await newLibray.save();

   response.status(200).json('Item successfully added');
  } catch (error){
    console.log('error: ', error.message);
  }


}
export const getLibrary = async (request,response) => {
  try{
    const library=  await Librarys.find({});
    response.json(library);
  } catch(error){
      console.log('Error: ',error.message);
  }
}


export const postSchool = async (request, response) => {

  try{
    const exist = await Schools.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const school= request.body;
    const newSchool = new Schools(school);
   await newSchool.save();

   response.status(200).json('Item successfully added');
  } catch (error){
    console.log('error: ', error.message);
  }


}

export const getSchool= async (request,response) => {
    try{
      const school =  await Schools.find({});
      response.json(school);
    } catch(error){
        console.log('Error: ',error.message);
    }
}



export const postShoppingMall = async (request, response) => {

  try{
    const exist = await ShoppingMalls.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const shoppingMall= request.body;
    const newShoppingMall = new ShoppingMalls(shoppingMall);
   await newShoppingMall.save();

   response.status(200).json('Item successfully added');
  } catch (error){
    console.log('error: ', error.message);
  }


}

export const getShoppingMall = async (request,response) => {
    try{
      const shoppingMall =  await ShoppingMalls.find({});
      response.json(shoppingMall);
    } catch(error){
        console.log('Error: ',error.message);
    }
}

export const postTemple = async (request, response) => {

  try{
    const exist = await Temples.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const temple= request.body;
    const newTemple = new Temples(temple);
   await newTemple.save();

   response.status(200).json('Item successfully added');
  } catch (error){
    console.log('error: ', error.message);
  }


}

export const getTemple = async (request,response) => {
    try{
      const temple =  await Temples.find({});
      response.json(temple);
    } catch(error){
        console.log('Error: ',error.message);
    }
}

export const postTourism = async (request, response) => {

  try{
    const exist = await Tourisms.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const tourism= request.body;
    const newTourism = new Tourisms(tourism);
   await newTourism.save();

   response.status(200).json('Item successfully added');
  } catch (error){
    console.log('error: ', error.message);
  }


}

export const getTourism = async (request,response) => {
    try{
      const tourism =  await Tourisms.find({});
      response.json(tourism);
    } catch(error){
        console.log('Error: ',error.message);
    }
}

export const postTransport = async (request, response) => {

  try{
    const exist = await Transports.findOne({itemTitle: request.body.itemTitle });

    if(exist){
      return response.status(401).json('Title already exist');
    }
    const transport= request.body;
    const newTransport = new Transports(transport);
   await newTransport.save();

   response.status(200).json('Item successfully added');
  } catch (error){
    console.log('error: ', error.message);
  }


}

export const getTransport = async (request,response) => {
    try{
      const transport =  await Transports.find({});
      response.json(transport);
    } catch(error){
        console.log('Error: ',error.message);
    }
}