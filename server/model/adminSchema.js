// eslint-disable-next-line

import mongoose from 'mongoose';




const adminSchema =  new mongoose.Schema({

   username: {
     type: String,
     required: true,
     trim: true,
     unique: true,
     max: 35,
     index: true,
     lowercase: false
   },
   password: {
     type: String,
     required: true
   },
   image:{
     type: String,
     required: true
   }
});

const admin= mongoose.model('admin', adminSchema);

export default admin;