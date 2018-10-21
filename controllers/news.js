const { getInsightsByTopic } = require('../models/insights');
const { searchPixaBay } = require('../models/pixabay');

exports.getNewsByTerm = (req, res, next) => {
  const { topic } = req.params;
  let newData;

  getInsightsByTopic(topic)
    .then(data => {
      searchPixaBay(topic)
        .then(url => {
          newData = data.personality;
          res.render('index.ejs', { topic, newData, url });
        })
        .catch(next);
    })
    .catch(next);
};
