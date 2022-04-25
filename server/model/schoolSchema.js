import mongoose from 'mongoose';




const schoolSchema =  new mongoose.Schema({
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
    }
})

const school= mongoose.model('school', schoolSchema);

export default school;