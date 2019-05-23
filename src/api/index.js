const express = require("express");

const { healthRouter } = require('../routes/health/health.router');
const { citiesRouter } = require('../routes/cities/cities.router');

const router = express.Router();
router.use("/health", healthRouter);
router.use("/cities", citiesRouter);

module.exports = router;
