var search = require("./app/search");
var listingDetails = require("./app/listingDetails");

var sendResponse = require("./lib/sendResponse");

var initializeRoutes = (server) => {
    server.get("/search/:destination", routeSearch);
    server.get("/listings", routeListings);
    server.get("/details/:listingId", routeListingDetails);


    server.on("NotFound", (req, res) => {
	    console.log(req);
        res.json(400, "Not a valid endpoint.");
    });
};

var routeSearch = (req, res, next) => {
    search.getResults(req.params.destination, res, sendResponse);
    return next();
};

var routeListings = (req, res, next) => {
	listingDetails.getListings(req, res, sendResponse);
};

var routeListingDetails = (req, res, next) => {
    listingDetails.getDetails(req.params.listingId, res, sendResponse);
    return next();
};

module.exports = {
    initializeRoutes: initializeRoutes
};
