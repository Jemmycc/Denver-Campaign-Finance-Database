const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({

    objectID: String, 
    date: String, 
    campaignName: String, 
    amount: Number, 
    organization: String, 
    contributorLastName: String, 
    contributorMiddleName: String, 
    contributorFirstName: String, 
    employer: String, 
    occupation: String, 
    contributorAddress: String, 
    cityID: String, 
    stateID : String, 
    zipID: String, 
    campaignType: String, 
    race: String, 
    districtNumber: String

});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
