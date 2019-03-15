const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Donation
            .find(req.query)
            .then(dbDonations => res.json(dbDonations))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Donation
            .findById(req.params.id)
            .then(dbDonations => res.json(dbDonations))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Donation
            .create(req.body)
            .then(dbDonations => res.json(dbDonations))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Donation
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbDonations => res.json(dbDonations))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Donation
            .findById({ _id: req.params.id })
            .then(dbDonations => dbDonations.remove())
            .then(dbDonations => res.json(dbDonations))
            .catch(err => res.status(422).json(err));
    }
};