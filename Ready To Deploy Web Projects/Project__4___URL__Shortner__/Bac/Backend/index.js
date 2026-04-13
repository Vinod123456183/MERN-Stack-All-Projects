const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Routes/urlRoutes.js");
const Url = require("./Models/Model.js"); // make sure path is correct

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/__DB__", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get("/", (req, res) => res.send("✅ Backend is working!"));
app.use("/shorturls", router);
app.get("/:shortcode", async (req, res) => {
  const { shortcode } = req.params;
  const fullShortLink = `http://localhost:3001/${shortcode}`;

  try {
    const urlData = await Url.findOne({ shortLink: fullShortLink });

    if (!urlData) {
      return res.status(404).send("❌ Short URL not found");
    }

    if (new Date() > new Date(urlData.expiry)) {
      return res.status(410).send("⏰ Link has expired");
    }

    return res.redirect(urlData.url);
  } catch (err) {
    console.error("Redirect error:", err);
    return res.status(500).send("🚨 Server error");
  }
});


app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
