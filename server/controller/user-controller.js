import User from '../model/userSchema.js'
import Admin from '../model/adminSchema.js'

export const userSignup = async (request, response) => {

    try{
      const exist = await User.findOne({username: request.body.username });
  
      if(exist){
        return response.status(401).json('Username already exist');
      }
      const user= request.body;
      const newUser = new User(user);
     await newUser.save();
  
     response.status(200).json('User is successfully Registered');
    } catch (error){
      console.log('error: ', error.message);
    }
  
  }

  export const userLoginIn = async (request, response) => {

    try{
      let user = await User.findOne({username: request.body.username, password: request.body.password });
      if(user){
        return response.status(200).json(`${request.body.username} login successfull`);
      } else {
        return response.status(401).json('Invalid Login');
      }
    } catch (error){
      console.log('Error: ', error.message);
    }
  }

  export const adminLoginIn = async (request, response) => {

    try{
      let admin = await Admin.find({});
      if(admin){
        return response.status(200).json(`${request.body.username} login successfull`);
      } else {
        return response.status(401).json('Invalid Login');
      }
    } catch (error){
      console.log('Error: ', error.message);
    }
  }
  
  export const adminInfo = async (request, response) => {

    try{
     const admin = await Admin.find({});  
      response.json(admin);  
    } catch(error){
        console.log('Error:',error.message);
    }
}