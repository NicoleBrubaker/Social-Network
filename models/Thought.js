const { Schema, model } = require("mongoose");
// const reactionSchema = require('./Reaction.js')

// Schema to create Thought model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
//   reactions: [reactionSchema],
});

// Virtual to retrieve the amount of reactions
// userSchema.virtual("reactionCount").get(function () {
//   return this.reactions.length;
// });
// userSchema.set("toJSON", { virtuals: true });

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
