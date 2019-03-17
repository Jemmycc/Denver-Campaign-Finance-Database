const router = require('express').Router();
// const donorsController = require('../../controllers/donorsController');
const db = require("../../models");


router.get('/', function (req, res) {
	console.log('this route');
	let result = {}
	db.Data.find({}).then(response => {
		result[0] = [...new Set(response.map(campaignDonor => campaignDonor.campaignName))].filter(item => item !== 'NULL').sort((a, b) => a < b ? -1 : 1);
		result[1] = [...new Set(response.map(campaignDonor => campaignDonor.year))].filter(item => item !== 'NULL').sort((a, b) => a < b ? -1 : 1);
		result[2] = [...new Set(response.map(campaignDonor => campaignDonor.race))].filter(item => item !== 'NULL' && item !== 'null').sort((a, b) => a < b ? -1 : 1);
		result[3] = [...new Set(response.map(campaignDonor => campaignDonor.amount))].filter(item => item !== 'NULL').sort((a, b) => a < b ? -1 : 1);
		res.json({ response: result });
	}).catch(err => {
		console.log(err);
	})
});

router.get('/contributed', function (req, res) {
	let race = req.query.race;
	// let year = req.query.year;
	// let yearRegex = '^' + year;
	// let amount = req.query.amount;
	// let minAmt = parseFloat(req.query.minAmt);
	// let maxAmt = parseFloat(req.query.maxAmt);
	console.log('this route: Contributed' + " " + req.query.race);

	db.Data.find({ race: race })
		.then(response => {
			res.json({ response });
			console.log(response);
		}).catch(err => {
			console.log(err);
		})
});

router.post('/contributedinfo', function (req, res) {
	console.log(req.body);

	db.Data.aggregate([
		{ $match: { race: req.body.params.race } },
		{ $group: { _id: "$year", total: { $sum: "$amount" } } }
	]).then(response => {
		res.json({ response });
		console.log(response);
	}).catch(err => {
		console.log(err);
	});

	// db.Data.find({ race: req.body.params.race })
	// 	.then(response => {
	// 		res.json({ response });
	// 	}).catch(err => {
	// 		console.log(err);
	// 	})
})




router.get('/yearlycontributed', function (req, res) {
	// let campaignName = req.query.campaignName;
	let year = req.query.year;
	// let yearRegex = '^' + year;
	// let amount = req.query.amount;
	// let minAmt = parseFloat(req.query.minAmt);
	// let maxAmt = parseFloat(req.query.maxAmt);
	console.log('this route: yearly Contributed' + " " + req.query.year);

	db.Data.find({ year: year })
		.then(response => {
			res.json({ response });
			console.log(response);
		}).catch(err => {
			console.log(err);
		})
});

router.post('/yearlycontributedinfo', function (req, res) {
	// let year = req.body.params.year;

		// db.Data.find({

		// campaignName: { $campaignName: req.body.campaignName },
		// year: year,
		// amount: { $amount: req.body.amount }


	db.Data.aggregate([
		{ $match: { year: req.body.params.year } },
		{ $group: { _id: "$campaignName", total: { $sum: "$amount" } } }
	]).then (response => {
		res.json({ response });
		console.log(response);
	}).catch(err => {
		console.log(err);
	});

})

module.exports = router;

