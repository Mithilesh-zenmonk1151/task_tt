const mongoose= require("mongoose");
const authSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "_id",
      },
      position: {
        type: String,
      },
      token: {
        type: String,
      }

},{timestamps:true})
module.exports=mongoose.model("auth",authSchema);