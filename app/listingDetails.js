var sampleData = require('../sampleData');

module.exports = {

	getListings: (req, res, cb) => {
		cb(null, res, {success: true, data: sampleData.listings});
	},

	getDetails: (req, res, cb) => {
		cb(null, res, {success: true, data: [1, 2, 3, 4, 5]});
	}
};
