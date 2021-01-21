const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const homeRoutes = require("./routes/home");
const scrapeRoutes = require("./routes/scrape");
app.use(cors());
app.use(express.json());
app.use("/", homeRoutes);
app.use("/scrape", scrapeRoutes);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
