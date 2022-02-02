const NodeGeocoder = require('node-geocoder');
const options = {
  provider: process.env.GEOCODER_PROVIDER,

  fetch: customFetchImplementation,
  apiKey: pro
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);