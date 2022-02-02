const NodeGeocoder = require('node-geocoder');
const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter:
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);