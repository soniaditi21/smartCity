import mongoose from 'mongoose';




const collegeSchema =  new mongoose.Schema({
  id:{
    type: String,
    required: true,
  },
    name:{
        type: String,
        required: true,
    },
    address:{
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
    site:{
      type: String,
      required: true,
    }
})

const college= mongoose.model('college', collegeSchema);

export default college;