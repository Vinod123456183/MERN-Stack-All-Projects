const Url = require("../Models/Model.js");
const { nanoid } = require("nanoid");

const Add_shorturl = async (req, res) => {
  const { url, validity } = req.body;
  if (!url || !validity) {
    return res.status(400).json({ error: "URL and validity are required" });
  }

  const shortcode = req.body.shortcode || nanoid(6);
  const expiry = new Date(Date.now() + validity * 60 * 1000);

  const newUrl = new Url({
    url,
    shortLink: `http://localhost:3001/${shortcode}`,
    expiry,
  });

  try {
    await newUrl.save();
    res.status(201).json({
      shortLink: `http://localhost:3001/${shortcode}`,
      expiry,
    });
  } catch (err) {
    console.error("Error saving URL:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const get_statistics = async (req, res) => {
  const { shortLink } = req.params;
  if (!shortLink) {
    return res.status(400).json({ error: "Short link is required" });
  }

  try {
    const fullShortLink = `http://localhost:3001/${shortLink}`;
    const urlData = await Url.findOne({ shortLink: fullShortLink });

    if (!urlData) {
      return res.status(404).json({ error: "Short link not found" });
    }

    res.status(200).json(urlData);
  } catch (err) {
    console.error("Error fetching stats:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { Add_shorturl, get_statistics };
