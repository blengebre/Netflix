require('dotenv').config();

const config = {
  mongoUrl: process.env.MOONGOURL,
  port: process.env.PORT || 8000,
};

module.exports = config;
   