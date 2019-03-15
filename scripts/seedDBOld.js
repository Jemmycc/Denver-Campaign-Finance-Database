const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/dcfd"
);

const dataSeed = [
    {
        objectID: "", 
        date: "", 
        campaignName: "", 
        amount: Number, 
        organization: "", 
        contributorLastName: "", 
        contributorMiddleName: "", 
        contributorFirstName: "", 
        employer: "", 
        occupation: "", 
        contributorAddress: "", 
        cityID: "", 
        stateID: "", 
        zipID: "", 
        campaignType: "", 
        race: "", 
        districtNumber: ""
    }
];
