const personalityInsights = require('../api/watson');
const request = require('superagent');

function getInsightsByTopic(topic) {
  const url = `https://newsapi.org/v2/everything?q=${topic}&from=2018-09-189&sortBy=publishedAt&apiKey=efa77f60fbb94ffd8112bf480b1eb588`;

  return request.get(url).then(res => {
    let articles = res.body.articles;

    let reducedArticles = articles.reduce((acc, article) => {
      return (acc += `${article.content}`);
    }, '');

    const profileParams = {
      content: reducedArticles,
      content_type: 'text/plain',
      consumption_preferences: true,
      raw_scores: true
    };

    return new Promise((resolve, reject) => {
      personalityInsights.profile(profileParams, function(error, data) {
        if (error) reject(error);
        else resolve(data);
      });
    });
  });
}

module.exports = { getInsightsByTopic };
