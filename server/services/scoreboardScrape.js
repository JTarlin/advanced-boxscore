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
    //we fill the todaysIds array with the Ids of all the games from the given day off /todaysScoreboard
    let todaysIds =[];
    for(game of innerText.scoreboard.games) {
      todaysIds.push(game.gameId);
    }
    return todaysIds; //instead of returning scoreboard json return game ids
  },
};
