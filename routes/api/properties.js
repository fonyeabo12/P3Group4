const router = require("express").Router();
const propertiesController = require("../../controllers/propertiesController");

// Matches with "/api/properties"
router.route("/")
  .get(propertiesController.findAll)
  .post(propertiesController.create);

// Matches with "/api/properties/:id"
router
  .route("/:id")
  .get(propertiesController.findById)
  .put(propertiesController.update)
  .delete(propertiesController.remove);

module.exports = router;
