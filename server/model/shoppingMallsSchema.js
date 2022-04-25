import mongoose from 'mongoose';




const shoppingMallsSchema =  new mongoose.Schema({
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

const shoppingMalls= mongoose.model('shoppingMalls', shoppingMallsSchema);

export default shoppingMalls;