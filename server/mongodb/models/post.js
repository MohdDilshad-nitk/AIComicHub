import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name : {type : String, required : true},
    prompt : {type : String, required : true},
    photos : {type : [String], required : true,validate: {
        validator: function (array) {
          return array.length > 0;
        },
        message: 'At least one photo should be there',
      },}
});


const PostSchema = mongoose.model('Post',Post);

export default PostSchema;