const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/],
      },
      thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        }
      ],
      friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
         },
      ],
    },
    {
    //from module 18, sutdent activity 
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  // Schema settings: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
  UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  const User = model('User', UserSchema);
  
  module.exports = User;