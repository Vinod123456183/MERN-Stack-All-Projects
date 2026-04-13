const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    shortLink: { type: String, required: true, unique: true },
    expiry: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Url", UrlSchema);
