const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: String,
  },
});

module.exports = userSchema;
