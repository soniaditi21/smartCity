

import  mongoose  from "mongoose";

const librarySchema = new mongoose.Schema({
 
    itemTitle:{
        type: String,
        required: true,
        unique: true,
    },
    primaryAddress:{
       type: String,
       required: true,
    },
    secondaryAddress:{
      type: String,
      required: true,
   },
    image: {
      type: String,
      required: true,
    },
    contact:{
      type: String,
      required: true,
    },
    website:{
      type: String,
      required: true,
    }

});

const librarys = mongoose.model('library', librarySchema);
export default librarys;