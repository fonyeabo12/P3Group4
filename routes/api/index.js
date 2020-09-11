const router = require("express").Router();
const propertyRoutes = require("./properties");

// Property routes
router.use("/properties", propertyRoutes);

module.exports = router;
