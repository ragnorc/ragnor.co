require("dotenv").config();
const path = require("path");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([[withImages], [withFonts]]);
