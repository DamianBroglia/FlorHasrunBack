const dotenv = require("dotenv")
const cloudinaryModule = require("cloudinary")
const {
    CLOUDE_NAME, API_KEY, API_SECRET
  } = process.env;

dotenv.config()
const cloudinary = cloudinaryModule.v2

cloudinary.config({
    cloud_name: CLOUDE_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
  });

module.exports = cloudinary;