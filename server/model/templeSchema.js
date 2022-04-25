import mongoose from 'mongoose';




const templeSchema =  new mongoose.Schema({
      name:{
          type: String,
          required: true
      },
      address:{
          type: String,
          required: true
      },
      image:{
          type: String,
      }
})

const temple= mongoose.model('temple', templeSchema);

export default temple;