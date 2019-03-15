// Contributor Model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contribSchema = new Schema({
  contributorLastName: String,
  contributorFirstName: String,
  amount: NumberDecimal,
  date: String
});

const Contributors = mongoose.model("Contributors", contributorSchema);

module.exports = Contributors;

//MongoDB Queries

// Mayoral Race contributions $500 and up by year

db.getCollection("contributions").find({ "race": /.*Mayor.*/i, "date": /^2019.*/i, "amount": { $gt: NumberDecimal("499.0") } });

db.getCollection("contributions").find({ "race": /.*Mayor.*/i, "date": /^2018.*/i, "amount": { $gt: NumberDecimal("499.0") } });

db.getCollection("contributions").find({ "race": /.*Mayor.*/i, "date": /^2017.*/i, "amount": { $gt: NumberDecimal("499.0") } });

db.getCollection("contributions").find({ "race": /.*Mayor.*/i, "date": /^2016.*/i, "amount": { $gt: NumberDecimal("499.0") } });

//Search Query JS

// contribsMayor: function(req, res) {
//     db.DCFD
//       .findMayorContribs(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },


