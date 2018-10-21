const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
// const { PI_USERNAME, PI_PASSWORD, PI_URL } = require('../config/');

// const PI_USERNAME = process.env.PI_USERNAME || require('../config');
// const PI_PASSWORD = process.env.PI_PASSWORD || require('../config');
// const PI_URL = process.env.PI_URL || require('../config');

const { PI_USERNAME } = process.env.PI_USERNAME || require('../config');
const { PI_PASSWORD } = process.env.PI_PASSWORD || require('../config');
const { PI_URL } = process.env.PI_URL || require('../config');

const personalityInsights = new PersonalityInsightsV3({
  version: '2017-10-13',
  username: PI_USERNAME,
  password: PI_PASSWORD,
  url: PI_URL
});

module.exports = personalityInsights;
