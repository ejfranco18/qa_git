var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
    {
      title: 'QA site',
      image: 'toes.png',
      images_list: [
        { image:'/images/mark-basarab-723939-unsplash.jpg', label: 'Photo by Mark Basarab on Unsplash' },
        { image:'/images/dmitry-ulitin-736117-unsplash.jpg', label: 'Photo by Dmitry Ulitin on Unsplash' },
        { image:'broken_image', label: 'Broken image' }
      ]
    }
  );
});

module.exports = router;
