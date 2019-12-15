const mongoose = require("mongoose");

const StatusSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  queryDate: {
    type: Date,
    value: new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/")
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("status", StatusSchema);
