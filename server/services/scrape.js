module.exports = {
  scrape: async (browser) => {
    const url =
      "https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json";
    const page = await browser.newPage();
    console.log(`Navigating to ${url}...`);
    await page.goto(url);
    await page.content();
    const innerText = await page.evaluate(() => {
      return JSON.parse(document.querySelector("body").innerText);
    });
    return innerText;
  },
};
