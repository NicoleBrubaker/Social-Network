const { Schema, model } = require("mongoose");
// const thoughtSchema = require("./Thought.js");

// Schema to create User model
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  // thoughts: [thoughtSchema],
  // friends: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
});

// // Virtual to retrieve the length of the users friends array field
// userSchema.virtual("friendCount").get(function () {
//   return this.friends.length;
// });
// userSchema.set("toJSON", { virtuals: true });

const User = model("user", userSchema);
module.exports = User;
