const router = require("express").Router();
const dataRoutes = require("./data");

// Home routes
router.use(dataRoutes);

// Donors routes
// router.use("/donors", donorsRoutes);


// Contributor Routes
// router.use("/contributed", contributedRoutes);

// Contributor Routes
// router.use("/yearlyContributed", yearlyContributedRoutes);

// For anything else, render the html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
