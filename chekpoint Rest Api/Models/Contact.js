const mongoose = require("mongoose");

const schema = mongoose.Schema;

const contactSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Phone: String,
});
module.exports = Contact = mongoose.model("contact", contactSchema);
