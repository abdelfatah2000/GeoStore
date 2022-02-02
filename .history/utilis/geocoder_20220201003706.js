const NodeGeocoder = require('node-geocoder');
const options = {
  provider: process.env.GEOCODER_PROVIDER,

  fetch: customFetchImplementation,
  apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);