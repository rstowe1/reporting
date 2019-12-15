const mongoose = require("mongoose");

const ApprovalSchema = mongoose.Schema({
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
    required: true
  },
  approved: {
    type: Number,
    required: true
  },
  rejected: {
    type: Number,
    required: true
  },
  hours_worked: {
    type: Number,
    required: true
  },
  original_approvals: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("approval", ApprovalSchema);
