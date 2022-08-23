import mongoose from 'mongoose';
const Schema=mongoose.Schema

const userSchema = new Schema({
 
   name:{
      type:String
   },

   age:{

      type: Number
   },

   email:{

      type:String
   },

   phone:{

      type:String
   },

   gender:{

      type: String
   },

   city:{
      type: String
   }

},
);

const User = new mongoose.model("User",userSchema)

export default User;