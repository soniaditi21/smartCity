import mongoose from 'mongoose';




const librarySchema =  new mongoose.Schema({
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

const library= mongoose.model('library', librarySchema);

export default library;