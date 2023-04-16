const router = require("express").Router();
const fortuneController = require("../controllers/fortuneControllers");

router.get("/all", fortuneController.getAllFortunes); // get all fortunes
router.get("/random", fortuneController.getRandomFortune); // get random fortune
router.post("/", fortuneController.createNewFortune); // empty end point, create new fortune
router.put("/:id", fortuneController.updateExistingFortune) // put is for something existing
router.delete("/:id", fortuneController.deleteExistingFortune); // delete a fortune

module.exports = router;
