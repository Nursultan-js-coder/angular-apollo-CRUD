const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content:{
    type:String,
    required:true
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = Post = mongoose.model("post",PostSchema);
