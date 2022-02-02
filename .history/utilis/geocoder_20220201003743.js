const NodeGeocoder = require('node-geocoder');
const options = {
  provider: process.env.GEOCODER_PROVIDER,

  fetch: customFetchImplementation,
  apiKey: 
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);