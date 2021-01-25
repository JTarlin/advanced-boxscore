const scoreboardScrapeServices = require("../services/scoreboardScrape");
const boxscoreScrapeServices = require("../services/boxscoreScrape");
const browserObject = require("../library/browser");
module.exports = {
  scrape: async (req, res) => {
    try {
      const browser = await browserObject.startBrowser();
      const todaysIds = await scoreboardScrapeServices.scrape(browser);
      const response = await boxscoreScrapeServices.scrape(browser, todaysIds[0]); //by default scrape only the first game 
      res.status(200).json({ message: "successfully scraped", response });
    } catch (err) {
      console.log("Could not resolve the browser instance => ", err);
    }
  },
};
