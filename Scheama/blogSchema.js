const mongoose = require("mongoose");
const blogsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  publication: {
    type: String,
  },
  time: {
    type: String,
  },
  date: {
    type: String,
  },
  link: {
    type: String,
  },
  img: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = blogsSchema;
