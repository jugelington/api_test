const { getInsightsByTopic } = require('../models/insights');
const { searchPixaBay } = require('../models/pixabay');

exports.getNewsByTerm = (req, res, next) => {
  const { topic } = req.params;
  let newData;

  // const pictureUrl = searchPixaPay(topic)

  getInsightsByTopic(topic)
    .then(data => {
      searchPixaBay(topic).then(url => {
        newData = data.personality;
        console.log(url);
        res.render('index.ejs', { topic, newData, url });
      });
    })
    .catch(next);
};
