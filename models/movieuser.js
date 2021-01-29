const mongoose = require('mongoose');

const movieuserSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    trim: true
  },
  movieID: {
    type: String
    }
  },
);

const blog = mongoose.model("movieuser", movieuserSchema);
module.exports = blog;
