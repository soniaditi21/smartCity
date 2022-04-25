import mongoose from 'mongoose';




const tourismSchema =  new mongoose.Schema({
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

const tourism= mongoose.model('tourism', tourismSchema);

export default tourism;