require("dotenv").config();
const path = require("path");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[withImages], [withFonts]], {
  env: {
    SEGMENT_KEY: process.env.SEGMENT_KEY,
  },
});
