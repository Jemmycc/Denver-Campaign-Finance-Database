// const axios = require("axios");
// const db = require("../models");

// module.exports = {
    // contributedSearch: function (req, res) {
    //     const { query: params } = req;
    //     db.Data
    //         .get({ params })
    //         .then(results =>
    //             results.data.items.filter(
    //                 result =>
    //                     result.campaignDonor.race &&
    //                     result.campaignDonor.date &&
    //                     campaignDonor.amount
    //             )
    //         )
    //         .then(apiContributed =>
    //             db.Data.find({}).then(contributed =>
    //                 contributed.filter(api =>
    //                     contributed.every(dbData => dbData.Id.toString() !== aapiContributed.id)
    //                 )
    //             )
    //         )
    //         .catch(err => res.status(422).json(err));
    // }
// };
