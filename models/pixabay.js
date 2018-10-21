const request = require('superagent');

function searchPixaBay(name) {
  console.log('searchPixaBay triggered');
  let url = `https://pixabay.com/api/?key=10442939-8662adf35c5d423898427d699&q=${name}&image_type=photo&pretty=true`;

  return request.get(url).then(res => {
    let imageUrlArray = [];
    imageUrlArray.push(res.body.hits[0]['largeImageURL']);
    imageUrlArray.push(res.body.hits[1]['largeImageURL']);
    imageUrlArray.push(res.body.hits[3]['largeImageURL']);
    imageUrlArray.push(res.body.hits[4]['largeImageURL']);
    imageUrlArray.push(res.body.hits[5]['largeImageURL']);
    imageUrlArray.push(res.body.hits[6]['largeImageURL']);
    imageUrlArray.push(res.body.hits[7]['largeImageURL']);
    imageUrlArray.push(res.body.hits[8]['largeImageURL']);
    imageUrlArray.push(res.body.hits[9]['largeImageURL']);

    // console.log(`imageUrlArray = ${imageUrlArray}`);
    console.log('imageUrlArray generated');
    return imageUrlArray;
  });
}

module.exports = { searchPixaBay };
