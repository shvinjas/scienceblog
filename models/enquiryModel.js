const { Schema, models, model } = require("mongoose");

const enquirySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  // name:String,
  // email:String,
  // message:String
});

const enquiryModel = models.enquiry || model("enquiry", enquirySchema);

export default enquiryModel;
