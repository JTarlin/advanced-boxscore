const express = require("express");
const router = express.Router();
const scrapeControllers = require("../controllers/scrape");
router.get("/", scrapeControllers.scrape);

module.exports = router;
