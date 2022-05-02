

import  mongoose  from "mongoose";

const transportSchema = new mongoose.Schema({
 
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

const transports = mongoose.model('transport', transportSchema);
export default transports;