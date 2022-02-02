const NodeGeocoder = require('node-geocoder');
const options = {
  provider: process.env.GEOCODER_PROVIDER,

  fetch: customFetchImplementation,
  apiKey: process.env.
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);