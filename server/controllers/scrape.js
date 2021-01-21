const scrapeServices = require("../services/scrape");
const browserObject = require("../library/browser");
module.exports = {
  scrape: async (req, res) => {
    try {
      const browser = await browserObject.startBrowser();
      const response = await scrapeServices.scrape(browser);
      res.status(200).json({ message: "successfully scraped", response });
    } catch (err) {
      console.log("Could not resolve the browser instance => ", err);
    }
  },
};
