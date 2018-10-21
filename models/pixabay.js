const request = require('superagent');

function searchPixaBay(name) {
  const url = `https://pixabay.com/api/?key=10442939-8662adf35c5d423898427d699&q=${name}&image_type=photo&pretty=true`;

  return request.get(url).then(res => {
    let imageUrlArray = [];
    for (let i = 0; i < 5; i++) {
      imageUrlArray.push(res.body.hits[i]['largeImageURL']);
    }

    return imageUrlArray;
  });
}

module.exports = { searchPixaBay };
