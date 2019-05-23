const express = require('express');

const { getCitiesController, postCitiesController } = require("./cities.controller");

const router = express.Router();

router.get("", getCitiesController);
router.post("", postCitiesController);

module.exports = {
  citiesRouter: router
}
