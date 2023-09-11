const mongoose = require("mongoose");

const IcondataSchema = new mongoose.Schema({
  exchange_id: String,
  url:String
});


IcondataModel = mongoose.model("Icondata", IcondataSchema);

module.exports = {
  IcondataModel
};