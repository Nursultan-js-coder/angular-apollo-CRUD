const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  title:{
    type:String,
    required:true
  },
  children:{
    type:Array,
    default:[],
    required:false,
    nested:{
      title:{
        type:String,
        required:true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      children:{
        type:Array,
        default:[]
      }

    }
  },
  description: {
    type: String,
    required: true,
  }
});

module.exports = Page = mongoose.model("page", PageSchema);
