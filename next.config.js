require("dotenv").config();
const path = require("path");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([[withFonts]], {
  env: {
    SEGMENT_KEY: process.env.SEGMENT_KEY,
  },
});
