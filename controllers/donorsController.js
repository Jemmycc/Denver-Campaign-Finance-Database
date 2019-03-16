const db = require('../models');

module.exports = {
	campaignSearch: function (req, res) {
		db.Data
			.find({})
			.then((response) => {
				const truncatedResponse = [...new Set(response.map((campaignDonor) => campaignDonor.race))]
					.filter((item) => item !== 'NULL')
					.sort((a, b) => (a < b ? -1 : 0));
				res.json({ response: truncatedResponse });
				res.json({ response })
			})
			.catch((err) => {
				console.log(err);
			});
	},




	campaignSearchResults: function (req, res) {
		db.Data
			.find({})
			.then((response) => {
				// console.log(response)
				res.json({ response })
				// const truncatedResponse = [ ...new Set(response.map((campaignDonor) => campaignDonor)) ]
				// 	.filter((item) => item !== 'NULL')
				// 	.sort((a, b) => (a < b ? -1 : 0));
				// res.json({ response: truncatedResponse });
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
