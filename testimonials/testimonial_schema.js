

const mongoose = require("mongoose");
const testimonialSchema = new mongoose.Schema({
  testimonial: {
    type: String,
    text: true,
    required: true
  },
  author: {
    type: String,
    text: true,
    required: true
  },
  position: {
    type: String,
    text: true,
    required: true
  } ,
  src: {
    type: String,
    text: true,
  } ,
});
module.exports = mongoose.model("testimonials", testimonialSchema);