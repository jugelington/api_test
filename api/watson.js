const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

const { PI_USERNAME, PI_PASSWORD, PI_URL } =
  process.env.NODE_ENV === 'production' ? process.env : require('../config');

const personalityInsights = new PersonalityInsightsV3({
  version: '2017-10-13',
  username: PI_USERNAME,
  password: PI_PASSWORD,
  url: PI_URL
});

module.exports = personalityInsights;
